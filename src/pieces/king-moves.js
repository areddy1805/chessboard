class King {
  getValidMoves(position) {
    const validMoves = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    return validMoves
      .map(([dx, dy]) => position.offset(dx, dy))
      .filter((p) => p !== null);
  }
}

module.exports = { King };
