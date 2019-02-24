const parseInputToState = require("../parseInputToState");

describe("check input is correctly set to state where appropiate", () => {
  state = {
    roomDimensions: {},
    hooverPosition: {},
    dirtPatches: [],
    drivingInstructions: [],
    cleaned: 0
  };

  test("correct input is set to state", () => {
    const input = "5 5\n1 3\n1 0\n2 2\n2 3\nNNESEESWNWW";

    returnedState = {
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
      cleaned: 0
    };

    expect(parseInputToState(input, state)).toEqual(returnedState);
  });

  test("incorrect input (letter) is not set to state and an error message is produced", () => {
    const input = "5 u\n1 3\n1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (null) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 null\n1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (empty string) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 \n1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (infinity) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 3\n1 infinity\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (greater than or equal to grid size) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 5\n1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (float) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 2.4\n1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });

  test("incorrect input (negative number) is not set to state and an error message is produced", () => {
    const input = "5 5\n1 5\n-1 0\n2 2\n2 3\nNNESEESWNWW";

    expect(() => parseInputToState(input, state)).toThrow(Error);
  });
});
