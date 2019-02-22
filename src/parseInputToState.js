const formatInput = fileInput => {
  //split fileInput by line and space
  let splitLineXY = fileInput.split("\n").map(line => line.split(" "));

  //capitalise directions & split by letter
  splitLineXY[splitLineXY.length - 1] = splitLineXY[splitLineXY.length - 1][0]
    .toUpperCase()
    .split("");

  return splitLineXY;
};

const parseInputToState = (fileInput, state) => {
  const formattedInputLines = formatInput(fileInput);
  // console.log(fileInput.split("/n"));
  //CHECK!
  if (/^\d\s\d$/.test(fileInput.split("/n")[0])) {
    state.roomDimensions = {
      x: parseInt(formattedInputLines[0][0]),
      y: parseInt(formattedInputLines[0][1])
    };
  } else {
    throw new Error("invalid input entered");
  }

  state.hooverPosition = {
    x: parseInt(formattedInputLines[1][0]),
    y: parseInt(formattedInputLines[1][1])
  };

  const findDirtPatches = formattedInputLines.slice(2, -1);
  state.dirtPatches = findDirtPatches.map(position => {
    return {
      x: parseInt(position[0]),
      y: parseInt(position[1])
    };
  });

  state.drivingInstructions =
    formattedInputLines[formattedInputLines.length - 1];

  return state;
};

module.exports = parseInputToState;
