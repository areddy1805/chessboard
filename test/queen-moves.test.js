const { Queen } = require("../src/pieces/queen-moves");
const Position = require("../src/position-coordinates");

describe("Queen movement", () => {
  test("Queen from E4 has 27 valid moves", () => {
    const pos = new Position("E4");
    const result = new Queen()
      .getValidMoves(pos)
      .map((p) => p.toString())
      .sort();
    const expected = [
      "A4",
      "B4",
      "C4",
      "D4",
      "F4",
      "G4",
      "H4",
      "E1",
      "E2",
      "E3",
      "E5",
      "E6",
      "E7",
      "E8",
      "A8",
      "B7",
      "C6",
      "D5",
      "F3",
      "G2",
      "H1",
      "B1",
      "C2",
      "D3",
      "F5",
      "G6",
      "H7",
    ].sort();

    expect(result).toEqual(expected);
  });

  test("Queen from A1 should reach 21 cells", () => {
    const pos = new Position("A1");
    const result = new Queen().getValidMoves(pos).map((p) => p.toString());
    expect(result.length).toBe(21);
    expect(result).toContain("A2");
    expect(result).toContain("B2");
    expect(result).toContain("H8");
    expect(result).not.toContain("A1");
  });

  test("Queen from H8 should reach 21 cells", () => {
    const pos = new Position("H8");
    const result = new Queen().getValidMoves(pos).map((p) => p.toString());
    expect(result.length).toBe(21);
    expect(result).toContain("H1");
    expect(result).toContain("A1");
    expect(result).toContain("G7");
    expect(result).not.toContain("H8");
  });
});

test("Queen from A1 should move right, up, and diagonally ↗", () => {
  const pos = new Position("A1");
  const result = new Queen()
    .getValidMoves(pos)
    .map((p) => p.toString())
    .sort();

  const expected = [
    // Horizontal →
    "B1",
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "H1",
    // Vertical ↑
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    // Diagonal ↗
    "B2",
    "C3",
    "D4",
    "E5",
    "F6",
    "G7",
    "H8",
  ].sort();

  expect(result).toEqual(expected);
});
test("Queen from E1 should move in 5 directions only (no down)", () => {
  const pos = new Position("E1");
  const result = new Queen().getValidMoves(pos).map((p) => p.toString());

  expect(result).not.toContain("E0"); // Ensure no invalid position
  expect(result).toContain("E2"); // Up
  expect(result).toContain("F2"); // ↗
  expect(result).toContain("F1"); // →
  expect(result).toContain("D2"); // ↖
  expect(result).toContain("D1"); // ←
});
