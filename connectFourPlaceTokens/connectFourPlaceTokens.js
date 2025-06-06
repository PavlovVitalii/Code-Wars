//Simulate placing tokens on a Connect Four board.

//INPUT
//A list of integers representing the columns (from 0 to 6) where tokens
//  are dropped, in order. The first player is yellow (Y), followed by
// red (R), alternating turns.
//OUTPUT
//The final state of the board after all tokens have been placed.
// Empty cells are marked with -.

// ASSUMPTIONS
// The board has 7 columns and 6 rows (standard Connect Four size).
// Tokens fall to the lowest available position in the chosen column.
// All input values are valid and within the allowed range.
// The input list must not be modified.
// Output format: rows are listed from top to bottom, with the top row
//  first and the bottom row last.

function connectFourPlaceTokens(columns) {
  const rows = 6;
  const cols = 7;
  const board = Array.from({ length: rows }, () => Array(cols).fill("-"));

  function placeToken(col, token) {
    for (let row = rows - 1; row >= 0; row--) {
      if (board[row][col] === "-") {
        board[row][col] = token;
        return;
      }
    }
  }

  columns.forEach((col, index) => {
    const token = index % 2 === 0 ? "Y" : "R"; // Y for yellow, R for red
    placeToken(col, token); 
  });

  return board;
}

console.log(Array.from({length: 6}, () => Array(7).fill("-")));
