const formatInput = fileInput => {
  //split fileInput by line and space
  let splitLineXY = fileInput.split("\n").map(line => line.split(" "));

  //capitalise directions & split by letter
  splitLineXY[splitLineXY.length - 1] = splitLineXY[splitLineXY.length - 1][0]
    .toUpperCase()
    .split("");

  return splitLineXY;
};

const isInteger = number => {
  //validates against null, undefined, infinity, negative number, and grid size is greater than 0
  return typeof number === "number" && number % 1 === 0 && number > 0;
};

const isIntegerInGrid = (number, axis, state) => {
  //validates against null, undefined, infinity, negative number & a number greater than the grid size
  return (
    typeof number === "number" &&
    number % 1 === 0 &&
    number >= 0 &&
    number <= state.roomDimensions[axis]
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
      return isInteger(Number(string));
      break;
    case "hooverPosition":
      return isIntegerInGrid(Number(string), axis, state);
      break;
    case "dirtPatches":
      return isIntegerInGrid(Number(string), axis, state);
      break;
    default:
      return false;
  }
};

const parseInputToState = (fileInput, state) => {
  const formattedInputLines = formatInput(fileInput);
  // check if roomDimensions is valid before setting it to state
  if (
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

  if (
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

  const findDirtPatches = formattedInputLines.slice(2, -1);
  state.dirtPatches = findDirtPatches.map(position => {
    if (
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

  formattedInputLines[formattedInputLines.length - 1].forEach(letter => {
    if (["N", "E", "S", "W"].includes(letter)) {
      state.drivingInstructions.push(letter);
    } else {
      throw new Error("Invalid input entered");
    }
  });

  return state;
};

module.exports = parseInputToState;
