var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(i, j, visited = new Set()) {
    grid[i][j] = "0";
    visited.add([i, j]);

    for (let [dr, dc] of directions) {
      const newRow = i + dr;
      const newCol = j + dc;
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === "1"
      ) {
        dfs(newRow, newCol, visited);
        grid[newRow][newCol] = "0";
      }
    }
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
