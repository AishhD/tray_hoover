const updateIfDirty = (state, matrix) => {
  //if the element has dirt in it update count and set the element to null as it is now cleaned
  if (matrix[state.hooverPosition.y][state.hooverPosition.x] === "dirt") {
    state.cleaned += 1;
    matrix[state.hooverPosition.y][state.hooverPosition.x] = null;
  }
};

const applyMovement = (movement, state, matrix) => {
  // set each direction type with a value
  const directions = {
    N: 1,
    S: -1,
    E: 1,
    W: -1
  };

  const coordinate = movement === "N" || movement === "S" ? "y" : "x";
  const movementAmount = directions[movement];

  //checking the new x or position is within the grid
  if (
    state.hooverPosition[coordinate] + movementAmount >= 0 &&
    state.hooverPosition[coordinate] + movementAmount <
      state.roomDimensions[coordinate]
  ) {
    state.hooverPosition[coordinate] =
      state.hooverPosition[coordinate] + movementAmount;
    updateIfDirty(state, matrix);
  }
  //if the new position is not within the grid the hoovers current coordinates will not be changed
};

const moveHoover = (matrix, state) => {
  //loop over driving instructions and call the fuction to validate movement
  state.drivingInstructions.forEach(movement => {
    applyMovement(movement, state, matrix);
  });

  //return both for testing purposes
  return [matrix, state];
};

module.exports = moveHoover;
