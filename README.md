# Chessboard Movement Simulator

This is a simple **console-based Node.js application** that simulates the valid movements of three chess pieces — **Pawn**, **King**, and **Queen** — on an **empty 8×8 chessboard**.

The chessboard is represented using standard cell coordinates (e.g., `A1`, `E4`, `H8`).

---

## Problem Statement

Simulate valid moves for the following pieces:

- **Pawn**: Moves 1 step forward (↑)
- **King**: Moves 1 step in any of the 8 directions
- **Queen**: Moves in all 8 directions until the edge of the board

---

## Assumptions

- The board is completely **empty**
- All pieces are **white**, so:
  - Pawn moves **upward** (i.e., increasing row number)
- No capturing logic, special moves, or board state beyond the current position
- Input is assumed to be well-formatted (e.g., `"King, D5"`)

---

## Setup & Run

### Using npm (recommended for compatibility)

```bash
git clone https://github.com/areddy1805/chessboard.git
cd chessboard
npm install
npm test
node src/index.js "King, D5"
```
