// 1. recursion
function recursiveKnapsack(weights, profits, capacity) {
  return recursiveSolve(weights, profits, capacity, weights.length);
}

function recursiveSolve(weights, profits, capacity, n) {
  if (n === 0 || capacity === 0) return 0;
  const choose =
    profits[n - 1] +
    recursiveSolve(weights, profits, capacity - weights[n - 1], n - 1);
  const notChoose = recursiveSolve(weights, profits, capacity, n - 1);

  if (weights[n - 1] <= capacity) return Math.max(choose, notChoose);
  else return notChoose;
}

// console.log(recursiveKnapsack([1, 3, 4, 5], [1, 4, 5, 7], 7));

// 2. memoised recursion
function recursiveMemoisedKnapsack(weights, profits, capacity) {
  const len = weights.length;
  const matrix = new Array(len + 1).fill(new Array(capacity + 1).fill(-1));
  return recuriveMemoisedSolve(matrix, weights, profits, capacity, len);
}

function recuriveMemoisedSolve(matrix, weights, profits, capacity, n) {
  if (matrix[n][capacity] !== -1) return matrix[n][capacity];
  if (n === 0 || capacity === 0) return (matrix[n][capacity] = 0);

  const choose =
    profits[n - 1] +
    recuriveMemoisedSolve(
      matrix,
      weights,
      profits,
      capacity - weights[n - 1],
      n - 1
    );
  const notChoose = recuriveMemoisedSolve(
    matrix,
    weights,
    profits,
    capacity,
    n - 1
  );

  if (weights[n - 1] <= capacity)
    return (matrix[n][capacity] = Math.max(choose, notChoose));
  else return (matrix[n][capacity] = notChoose);
}

// console.log(recursiveMemoisedKnapsack([1, 3, 4, 5], [1, 4, 5, 7], 13));

// top down iterative
function iterativeKnapsack(weights, profits, capacity) {
  const rows = weights.length + 1;
  const cols = capacity + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) matrix[i][j] = 0;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const choose = profits[i - 1] + matrix[i - 1][j - weights[i - 1]];
      const notChoose = matrix[i - 1][j];

      if (weights[i - 1] <= j) matrix[i][j] = Math.max(choose, notChoose);
      else matrix[i][j] = notChoose;
    }
  }
  return matrix[rows - 1][cols - 1];
}

console.log(iterativeKnapsack([1, 3, 4, 5], [1, 4, 5, 7], 7));
