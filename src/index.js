const Position = require("./position-coordinates");
const { King } = require("./pieces/king-moves");
const { Queen } = require("./pieces/queen-moves");
const { Pawn } = require("./pieces/pawn-moves");

// Accept input like: "Queen, E4"
const input = process.argv[2];
if (!input) {
  console.error("Usage: node src/index.js '<PieceType>, <Position>'");
  process.exit(1);
}

const [type, cell] = input.split(",").map((x) => x.trim());
const position = new Position(cell);

let piece;
switch (type.toLowerCase()) {
  case "king":
    piece = new King();
    break;
  case "queen":
    piece = new Queen();
    break;
  case "pawn":
    piece = new Pawn();
    break;
  default:
    throw new Error("Unsupported piece type: " + type);
}

const moves = piece.getValidMoves(position);
console.log(moves.map((p) => p.toString()).join(", "));
