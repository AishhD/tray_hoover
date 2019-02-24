const readInput = require("./readInput");
const parseInputToState = require("./parseInputToState");
const createMatrix = require("./createMatrix");
const addDirtToMatrix = require("./addDirtToMatrix");
const moveHoover = require("./moveHoover");
const returnResults = require("./returnResults");

const runHoover = () => {
  //create a state for the programs data to be stored in
  let state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: [],
    cleaned: 0
  };

  //if input file can be correctly read then run the program
  if (readInput()) {
    let fileInput = readInput();
    parseInputToState(fileInput, state);
    const matrix = createMatrix(state);
    addDirtToMatrix(matrix, state);
    moveHoover(matrix, state);
    returnResults(state);
  }
};

module.exports = runHoover;
