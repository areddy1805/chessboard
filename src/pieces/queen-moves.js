const Position = require("../position-coordinates");

class Queen {
  getValidMoves(position) {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    const moves = [];

    for (const [dx, dy] of directions) {
      let current = position;
      while (true) {
        current = current.offset(dx, dy);
        if (!current) break;
        moves.push(current);
      }
    }

    return moves;
  }
}

module.exports = { Queen };
