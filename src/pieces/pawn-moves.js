const Position = require("../position-coordinates");

class Pawn {
  getValidMoves(position) {
    const forward = position.offset(0, 1); // Move 1 step forward (up the board)
    return forward ? [forward] : [];
  }
}

module.exports = { Pawn };
