const { Pawn } = require("../src/pieces/pawn-moves");
const Position = require("../src/position-coordinates");

describe("Pawn movement", () => {
  test("Pawn from E2 should move to E3", () => {
    const pos = new Position("E2");
    const result = new Pawn().getValidMoves(pos).map((p) => p.toString());
    expect(result).toEqual(["E3"]);
  });

  test("Pawn from G7 should move to G8", () => {
    const pos = new Position("G7");
    const result = new Pawn().getValidMoves(pos).map((p) => p.toString());
    expect(result).toEqual(["G8"]);
  });

  test("Pawn from A8 should have no moves (top row)", () => {
    const pos = new Position("A8");
    const result = new Pawn().getValidMoves(pos);
    expect(result).toEqual([]);
  });

  test("Pawn from H8 should have no moves (top-right corner)", () => {
    const pos = new Position("H8");
    const result = new Pawn().getValidMoves(pos);
    expect(result).toEqual([]);
  });

  test("Pawn from D1 should move to D2", () => {
    const pos = new Position("D1");
    const result = new Pawn().getValidMoves(pos).map((p) => p.toString());
    expect(result).toEqual(["D2"]);
  });
});
