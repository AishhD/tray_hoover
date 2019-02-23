const fs = require("fs");

const parseInputToState = require("./parseInputToState");
const createMatrix = require("./createMatrix");
const addDirtToMatrix = require("./addDirtToMatrix");
const moveHoover = require("./moveHoover");
const returnResults = require("./returnResults");

const readFile = () => {
  let input;

  //synchronously read input if it the file is there
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
  //create a state for the programs data to be stored in
  state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: [],
    cleaned: 0
  };

  //if input file can be correctly read then run the program
  if (readFile()) {
    let fileInput = readFile();
    parseInputToState(fileInput, state);
    const matrix = createMatrix(state);
    addDirtToMatrix(matrix, state);
    moveHoover(matrix, state);
    returnResults(state);
  }
};

module.exports = runHoover;
