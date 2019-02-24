const moveHoover = require("../moveHoover");

describe("the hoover moves and updates cleaned count", () => {
  test("hoover coordinates are updated and cleaned count updated", () => {
    let state = {
      roomDimensions: { x: 5, y: 5 },
      hooverPosition: { x: 1, y: 2 },
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

    const matrix = [
      [null, "dirt", null, null, null],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, "dirt", null, null],
      [null, null, null, null, null]
    ];

    const returnedState = {
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

    const returnedMatrix = [
      [null, "dirt", null, null, null],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    expect(moveHoover(matrix, state)).toEqual([returnedMatrix, returnedState]);
  });

  test("hoover coordinates are updated and cleaned count updated", () => {
    let state = {
      roomDimensions: { x: 5, y: 7 },
      hooverPosition: { x: 1, y: 3 },
      dirtPatches: [
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 1, y: 6 },
        { x: 4, y: 0 },
        { x: 3, y: 3 }
      ],
      drivingInstructions: [
        "N",
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

    const matrix = [
      ["dirt", null, null, null, "dirt"],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, null, "dirt", null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, "dirt", null, null, null]
    ];

    const returnedState = {
      roomDimensions: { x: 5, y: 7 },
      hooverPosition: { x: 1, y: 5 },
      dirtPatches: [
        { x: 0, y: 0 },
        { x: 2, y: 2 },
        { x: 1, y: 6 },
        { x: 4, y: 0 },
        { x: 3, y: 3 }
      ],
      drivingInstructions: [
        "N",
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

    const returnedMatrix = [
      ["dirt", null, null, null, "dirt"],
      [null, null, null, null, null],
      [null, null, "dirt", null, null],
      [null, null, null, "dirt", null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ];

    expect(moveHoover(matrix, state)).toEqual([returnedMatrix, returnedState]);
  });
});
