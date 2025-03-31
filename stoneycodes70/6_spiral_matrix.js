// time: O(rows * cols)
// space: O(rows * cols)

var spiralOrder = function (matrix) {
  const result = [];
  return solve(matrix, result);
};

function solve(matrix, result) {
  if (matrix.length === 0 || matrix[0].length === 0) return result;

  // Top row
  result.push(...matrix[0]);
  matrix.shift(); // Remove top row

  // Right column
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length > 0) {
      result.push(matrix[i][matrix[i].length - 1]);
      matrix[i].pop(); // Remove last element
    }
  }

  // Bottom row (if exists)
  if (matrix.length > 0) {
    let bottom = matrix.pop();
    result.push(...bottom.reverse());
  }

  // Left column
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length > 0) {
      result.push(matrix[i][0]);
      matrix[i].shift(); // Remove first element
    }
  }

  return solve(matrix, result);
}
