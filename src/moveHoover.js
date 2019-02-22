const checkForDirt = (state, coordinate, direction, matrix) => {
  if (matrix[state.hooverPosition.y][state.hooverPosition.x] === "dirt") {
    state.cleaned += 1;
    matrix[state.hooverPosition.y][state.hooverPosition.x] = null;
  }
};

const validateMovement = (movement, state, matrix) => {
  // updateHooverPosition return a valid value and the x & y position is less than the grid size

  const directions = {
    N: 1,
    S: -1,
    E: 1,
    W: -1
  };

  const coordinate = movement === "N" || movement === "S" ? "y" : "x";
  const direction = directions[movement];

  //checking the new x or position is within the grid
  if (
    state.hooverPosition[coordinate] + direction >= 0 &&
    state.hooverPosition[coordinate] + direction <
      state.roomDimensions[coordinate]
  ) {
    state.hooverPosition[coordinate] =
      state.hooverPosition[coordinate] + direction;
    checkForDirt(state, coordinate, direction, matrix);
  }
  //if the new position is not within the grid the hoovers current coordinates will not be changed
};

const moveHoover = (matrix, state) => {
  //loop over driving instructions, if valid movement hoover & if there is dirt update cleaned count
  state.drivingInstructions.forEach(movement => {
    validateMovement(movement, state, matrix);
  });
};

module.exports = moveHoover;
