const formatInput = fileInput => {
  //split fileInput by line and space
  let splitLineXY = fileInput.split("\n").map(line => line.split(" "));

  //capitalise directions & split by letter
  splitLineXY[splitLineXY.length - 1] = splitLineXY[splitLineXY.length - 1][0]
    .toUpperCase()
    .split("");

  return splitLineXY;
};

const isEmptyString = string => {
  //Number("") = 0 so empty string validation done before changing it to a number
  return string === "" ? false : true;
};

const isInteger = number => {
  //validates against null, infinity, negative number, float and grid size is greater than 0
  return typeof number === "number" && number % 1 === 0 && number > 0;
};

const isIntegerInGrid = (number, axis, state) => {
  //validates against null, infinity, negative number, float & a number greater than the grid size
  return (
    typeof number === "number" &&
    number % 1 === 0 &&
    number >= 0 &&
    number < state.roomDimensions[axis]
  );
};

const isStringAInteger = (
  string,
  lineType = null,
  axis = null,
  state = null
) => {
  //changes the string to number and call the appropriate validation method
  switch (lineType) {
    case "roomDimensions":
      if (isEmptyString(string)) {
        return isInteger(Number(string));
      }
      break;
    case "hooverPosition":
      if (isEmptyString(string)) {
        return isIntegerInGrid(Number(string), axis, state);
      }
      break;
    case "dirtPatches":
      if (isEmptyString(string)) {
        return isIntegerInGrid(Number(string), axis, state);
      }
      break;
    default:
      return false;
  }
};

const validateRoomDimensionsInput = formattedInputLines => {
  // check if roomDimensions is valid and only has two numbers in it before setting it to state
  if (
    formattedInputLines[0].length === 2 &&
    isStringAInteger(formattedInputLines[0][0], "roomDimensions") &&
    isStringAInteger(formattedInputLines[0][1], "roomDimensions")
  ) {
    state.roomDimensions = {
      x: parseInt(formattedInputLines[0][0]),
      y: parseInt(formattedInputLines[0][1])
    };
  } else {
    throw new Error("Invalid input entered");
  }
};

const validateHooverPositionInput = formattedInputLines => {
  // check if hooverPosition is valid and only has two numbers in it before setting it to state
  if (
    formattedInputLines[1].length === 2 &&
    isStringAInteger(formattedInputLines[1][0], "hooverPosition", "x", state) &&
    isStringAInteger(formattedInputLines[1][1], "hooverPosition", "y", state)
  ) {
    state.hooverPosition = {
      x: parseInt(formattedInputLines[1][0]),
      y: parseInt(formattedInputLines[1][1])
    };
  } else {
    throw new Error("Invalid input entered");
  }
};

const validateDirtPatchesInput = formattedInputLines => {
  const findDirtPatches = formattedInputLines.slice(2, -1);
  // check if dirtPatches is valid and only has two numbers in each line before setting it to state
  state.dirtPatches = findDirtPatches.map(position => {
    if (
      position.length === 2 &&
      isStringAInteger(position[0], "dirtPatches", "x", state) &&
      isStringAInteger(position[1], "dirtPatches", "y", state)
    ) {
      return {
        x: parseInt(position[0]),
        y: parseInt(position[1])
      };
    } else {
      throw new Error("Invalid input entered");
    }
  });
};

const validatedrivingInstructionsInput = formattedInputLines => {
  //check the line only includes "N", "E", "S", "W"
  formattedInputLines[formattedInputLines.length - 1].forEach(letter => {
    if (["N", "S", "E", "W"].includes(letter)) {
      state.drivingInstructions.push(letter);
    } else {
      throw new Error("Invalid input entered");
    }
  });
};

const parseInputToState = (fileInput, state) => {
  const formattedInputLines = formatInput(fileInput);

  //validates input before setting it to state
  validateRoomDimensionsInput(formattedInputLines);
  validateHooverPositionInput(formattedInputLines);
  validateDirtPatchesInput(formattedInputLines);
  validatedrivingInstructionsInput(formattedInputLines);

  return state;
};

module.exports = parseInputToState;
