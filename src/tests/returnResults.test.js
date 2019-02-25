const returnResults = require("../returnResults");

describe("console log results", () => {
  const state = {
    roomDimensions: { x: 5, y: 5 },
    hooverPosition: { x: 1, y: 3 },
    dirtPatches: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    drivingInstructions: [
      "N",
      "N",
      "E",
      "S",
      "E",
      "E",
      "S",
      "W",
      "N",
      "W",
      "W"
    ],
    cleaned: 1
  };

  test("it console logs the position of the hoover", () => {
    console.log = jest.fn(returnResults(state));
    log = jest.fn(returnResults(state));
    expect(console.log).toHaveBeenCalledWith("1 3");
  });

  test("it console logs the number of patches cleaned", () => {
    console.log = jest.fn(returnResults(state));
    log = jest.fn(returnResults(state));
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
