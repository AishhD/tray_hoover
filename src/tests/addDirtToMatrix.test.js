const addDirtToMatrix = require("../addDirtToMatrix");

describe("Will replace null with patched of dirt", () => {
  test("will add dirt to the correct places in the matrix", () => {
    const state = {
      dirtPatches: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
    };

    const matrix = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    const resultMatrix = [
      [null, "dirt", null, null, null],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, "dirt", null, null],
      [null, null, null, null, null]
    ];

    expect(addDirtToMatrix(matrix, state)).toEqual(resultMatrix);
  });

  test("will add dirt to the correct places in the matrix", () => {
    const state = {
      dirtPatches: [
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 1, y: 6 },
        { x: 4, y: 0 },
        { x: 3, y: 3 }
      ]
    };

    const matrix = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    const resultMatrix = [
      ["dirt", null, null, null, "dirt"],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, null, "dirt", null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, "dirt", null, null, null]
    ];

    expect(addDirtToMatrix(matrix, state)).toEqual(resultMatrix);
  });
});
