var equalPairs = function (grid) {
  let count = 0;
  let rowSet = new Map();
  for (let i = 0; i < grid.length; i++) {
    const row = JSON.stringify(grid[i]);
    rowSet.set(row, (rowSet.get(row) || 0) + 1);
  }
  for (let j = 0; j < grid.length; j++) {
    const col = JSON.stringify(grid.map((row) => row[j]));
    if (rowSet.has(col)) {
      count += rowSet.get(col);
    }
  }

  return count;
};
