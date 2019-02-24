const readInput = require("./readInput");
const parseInputToState = require("./parseInputToState");
const createMatrix = require("./createMatrix");
const addDirtToMatrix = require("./addDirtToMatrix");
const moveHoover = require("./moveHoover");
const returnResults = require("./returnResults");

//(readInputFunc = readInput) passed as argument for testing
const runHoover = (readInputFunc = readInput) => {
  //create a state for the programs data to be stored in
  let state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: [],
    cleaned: 0
  };

  let fileInput = readInputFunc();

  //if input file can be correctly read then run the program
  if (fileInput) {
    parseInputToState(fileInput, state);
    const matrix = createMatrix(state);
    addDirtToMatrix(matrix, state);
    moveHoover(matrix, state);
    returnResults(state);
  }
};

module.exports = runHoover;
