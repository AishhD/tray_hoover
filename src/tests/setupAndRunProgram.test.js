const hoover = require("../setupAndRunProgram");

describe("the hoover runs and gives the expected output", () => {
  test("uses current input file and returns the correct output", () => {
    console.log = jest.fn(hoover());
    log = jest.fn(hoover());
    expect(console.log).toHaveBeenCalledWith("1 3");
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
