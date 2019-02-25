const returnResults = state => {
  const hooverPosition = `The final hoover position is: x:${
    state.hooverPosition.x
  }, y:${state.hooverPosition.y}.`;
  const cleaned = `The number of patches cleaned is: ${state.cleaned}`;
  console.log(hooverPosition);
  console.log(cleaned);
};

module.exports = returnResults;
