const createMatrix = state => {
  let matrix = [];
  for (let i = 0; i < state.roomDimensions.y; i++) {
    matrix[i] = new Array(state.roomDimensions.x).fill(null);
  }
  return matrix;
};

module.exports = createMatrix;
