class PositionCoordinates {
  constructor(cell) {
    console.log("cell:", cell);

    const col = cell[0].toUpperCase();
    const row = parseInt(cell[1]);

    // convert to 0 base index in 2D array
    this.x = col.charCodeAt(0) - "A".charCodeAt(0);
    this.y = row - 1;

    if (!this.isValid()) {
      throw new Error(`Invalid position: ${cell}`);
    }
  }
  // check if the position is valid or out of bounds
  isValid() {
    return this.x >= 0 && this.x < 8 && this.y >= 0 && this.y < 8;
  }
  // get a new position
  offset(dx, dy) {
    const newX = this.x + dx;
    const newY = this.y + dy;
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      return new PositionCoordinates(
        String.fromCharCode(65 + newX) + (newY + 1)
      );
    }
    return null;
  }

  toString() {
    return String.fromCharCode(65 + this.x) + (this.y + 1);
  }
}

module.exports = PositionCoordinates;
