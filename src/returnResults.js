const returnResults = state => {
  const hooverPosition = state.hooverPosition.x + " " + state.hooverPosition.y;
  console.log(hooverPosition);
  console.log(state.cleaned);
};

module.exports = returnResults;
