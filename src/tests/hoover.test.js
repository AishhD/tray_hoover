const hoover = require("../hoover");

describe("the hoover runs and gives the expected output", () => {
  test("uses current input file and returns the correct output", () => {
    console.log = jest.fn(hoover());
    log = jest.fn(hoover());
    expect(console.log).toHaveBeenCalledWith(
      "The final hoover position is: x:1, y:3."
    );
    expect(console.log).toHaveBeenCalledWith(
      "The number of patches cleaned is: 1"
    );
  });
});
