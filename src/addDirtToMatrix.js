const addDirtToMatrix = (matrix, state) => {
  //iterate through patches of dirt adding to matrix
  state.dirtPatches.forEach(dirt => {
    matrix[dirt.y][dirt.x] = "dirt";
  });
  return matrix;
};

module.exports = addDirtToMatrix;
