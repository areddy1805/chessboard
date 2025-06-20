const { King } = require("../src/pieces/king-moves");
const Position = require("../src/position-coordinates");

test("King moves from D5", () => {
  const king = new King();
  const pos = new Position("D5");
  const result = king
    .getValidMoves(pos)
    .map((p) => p.toString())
    .sort();
  const expected = ["C4", "C5", "C6", "D4", "D6", "E4", "E5", "E6"].sort();
  expect(result).toEqual(expected);
});

test("King on left edge (A5)", () => {
  const pos = new Position("A5");
  const result = new King()
    .getValidMoves(pos)
    .map((p) => p.toString())
    .sort();
  expect(result).toEqual(["A4", "A6", "B4", "B5", "B6"].sort());
});

test("King in bottom-left corner (A1)", () => {
  const pos = new Position("A1");
  const result = new King()
    .getValidMoves(pos)
    .map((p) => p.toString())
    .sort();
  expect(result).toEqual(["A2", "B1", "B2"].sort());
});

test("Invalid position Z9 throws error", () => {
  expect(() => new Position("Z9")).toThrow("Invalid position");
});
