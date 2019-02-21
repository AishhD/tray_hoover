const fs = require("fs");
const parseInputToState = require("./parseInputToState");

//create a state for the data
const data = () => {
  state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: []
  };
};

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
  //if input file is correctly read run program
  if (readFile()) {
    let input = readFile();
    parseInputToState(input, data.state);
  }
};

module.exports = runHoover;
