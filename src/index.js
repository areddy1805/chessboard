const Position = require("./position-coordinates");
const { King } = require("./pieces/king-moves");
const { Pawn } = require("./pieces/pawn-moves");

const input = process.argv[2]; // Example: "King, D5"
const [type, cell] = input.split(",").map((x) => x.trim());
const position = new Position(cell);

let piece;
if (type.toLowerCase() === "king") {
  piece = new King();
}
if (type.toLowerCase() === "pawn") {
  piece = new Pawn();
} else {
  throw new Error("Only 'King' is implemented yet.");
}

const moves = piece.getValidMoves(position);
console.log(moves.map((m) => m.toString()).join(", "));
