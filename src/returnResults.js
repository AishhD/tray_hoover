const returnResults = state => {
  console.log(state.hooverPosition.x + " " + state.hooverPosition.y);
  console.log(state.cleaned);
};

module.exports = returnResults;
