const addDirtToMatrix = (originalMatrix, state) => {
  for (let dirt of state.dirtPatches) {
    originalMatrix[dirt.x][dirt.y] = "dirt";
  }
};

module.exports = addDirtToMatrix;
