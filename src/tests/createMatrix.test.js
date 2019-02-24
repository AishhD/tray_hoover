const createMatrix = require("../createMatrix");

describe("creates a matrix", () => {
  test("create a 5x5 matrix", () => {
    const state = {
      roomDimensions: { x: 5, y: 5 }
    };

    const returnedMatrix = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    expect(createMatrix(state)).toEqual(returnedMatrix);
  });

  test("create a 7x5 matrix", () => {
    const state = {
      roomDimensions: { x: 7, y: 5 }
    };

    const returnedMatrix = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    expect(createMatrix(state)).toEqual(returnedMatrix);
  });

  test("create a 7x9 matrix", () => {
    const state = {
      roomDimensions: { x: 7, y: 9 }
    };

    const returnedMatrix = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    expect(createMatrix(state)).toEqual(returnedMatrix);
  });
});
