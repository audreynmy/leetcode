var isValidSudoku = function (board) {
  let rowSet = Array.from({ length: 9 }, () => new Set());
  let colSet = Array.from({ length: 9 }, () => new Set());
  let boxSet = Array.from({ length: 9 }, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") {
        continue;
      }
      let box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rowSet[i].has(num) || colSet[j].has(num) || boxSet[box].has(num)) {
        return false;
      }
      rowSet[i].add(num);
      colSet[j].add(num);
      boxSet[box].add(num);
    }
  }
  return true;
};
