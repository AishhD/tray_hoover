const fs = require("fs");
const parseInputToState = require("./parseInputToState");

//synchronously read input
const readFile = () => {
  let input;

  try {
    input = fs.readFileSync("./input.txt", "utf8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("./input.txt is not found");
    } else {
      throw err;
    }
  }

  return input;
};

const runHoover = () => {
  //create a state for the data
  state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: []
  };

  //if input file can be correctly read
  if (readFile()) {
    let fileInput = readFile();
    parseInputToState(fileInput, state);
  }
};

module.exports = runHoover;
