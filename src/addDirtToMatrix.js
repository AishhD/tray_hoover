const addDirtToMatrix = (matrix, state) => {
  //iterate through patches of dirt adding to matrix
  for (let dirt of state.dirtPatches) {
    matrix[dirt.y][dirt.x] = "dirt";
  }
};

module.exports = addDirtToMatrix;
