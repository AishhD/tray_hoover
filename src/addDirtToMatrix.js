const addDirtToMatrix = (matrix, state) => {
  for (let dirt of state.dirtPatches) {
    matrix[dirt.y][dirt.x] = "dirt";
  }
};

module.exports = addDirtToMatrix;
