// 1. recursion
function recursiveCoinChangeMaxWays(coins, sum) {
  return recursiveSolve(coins, sum, coins.length);
}

function recursiveSolve(coins, sum, n) {
  if (sum === 0) return 1;
  if (n === 0) return 0;
  if (coins[n - 1] <= sum)
    return (
      recursiveSolve(coins, sum - coins[n - 1], n) +
      recursiveSolve(coins, sum, n - 1)
    );
  else return recursiveSolve(coins, sum, n - 1);
}

// console.log(recursiveCoinChangeMaxWays([1, 2, 3], 10));

// 2. recursive memoised
function recursiveMemoisedCoinChangeMaxWays(coins, sum) {
  const len = coins.length;
  const rows = len + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));
  return recursiveMemoisedSolve(coins, sum, len, matrix);
}

function recursiveMemoisedSolve(coins, sum, n, matrix) {
  if (sum === 0) return (matrix[n][sum] = 1);
  if (n === 0) return (matrix[n][sum] = 0);
  if (matrix[n][sum] !== 0) return matrix[n][sum];

  if (coins[n - 1] <= sum) {
    return (matrix[n][sum] =
      recursiveMemoisedSolve(coins, sum - coins[n - 1], n, matrix) +
      recursiveMemoisedSolve(coins, sum, n - 1, matrix));
  } else
    return (matrix[n][sum] = recursiveMemoisedSolve(coins, sum, n - 1, matrix));
}

// console.log(recursiveMemoisedCoinChangeMaxWays([1, 2, 3], 10));

// 3. iterative
function iterativeCoinChangeMaxWays(coins, sum) {
  const n = coins.length;
  const rows = n + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j === 0) matrix[i][j] = 1;
      else if (i === 0) matrix[i][j] = 0;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (coins[i - 1] <= j) {
        matrix[i][j] = matrix[i][j - coins[i - 1]] + matrix[i - 1][j];
      } else matrix[i][j] = matrix[i - 1][j];
    }
  }
  return matrix[n][sum];
}

// console.log(iterativeCoinChangeMaxWays([1, 2, 3], 10));

// 4. space optimised iterative top down with 2 rows ***
function spaceOptimisedIterativeCoinChangeMaxWays(coins, sum) {
  const len = coins.length;
  let prev = new Array(sum + 1).fill(0);
  for (let i = 0; i <= sum; i++) {
    if (i % coins[0] === 0) prev[i] = 1;
  }

  for (let i = 1; i < len; i++) {
    let curr = new Array(sum + 1).fill(0);
    for (let j = 0; j <= sum; j++) {
      if (coins[i] <= j) curr[j] = curr[j - coins[i]] + prev[j];
      else curr[j] = prev[j];
    }
    prev = [...curr];
  }
  return prev[sum];
}

console.log(spaceOptimisedIterativeCoinChangeMaxWays([1, 2, 3], 10));
