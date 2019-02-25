const returnResults = state => {
  const hooverPosition = `${state.hooverPosition.x} ${state.hooverPosition.y}`;
  const cleaned = state.cleaned;
  console.log(hooverPosition);
  console.log(cleaned);
};

module.exports = returnResults;
