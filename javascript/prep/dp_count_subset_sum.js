// 1. recursive
function recursiveCountSubsetSum(arr, sum) {
  return recursiveSolve(arr, sum, arr.length);
}

function recursiveSolve(arr, sum, n) {
  if (sum === 0) return 1;
  if (n === 0) return 0;
  if (arr[n - 1] <= sum)
    return (
      recursiveSolve(arr, sum - arr[n - 1], n - 1) +
      recursiveSolve(arr, sum, n - 1)
    );
  else return recursiveSolve(arr, sum, n - 1);
}

// console.log(recursiveCountSubsetSum([2, 3, 5, 6, 8, 10], 10));

// 2. recursive memoised
function recursiveMemoisedCountSubsetSum(arr, sum) {
  const len = arr.length;
  const rows = len + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));
  return recursiveMemoisedSolve(arr, sum, len, matrix);
}

function recursiveMemoisedSolve(arr, sum, n, matrix) {
  if (matrix[n][sum] !== 0) return matrix[n][sum];
  if (sum === 0) return 1;
  if (n === 0) return 0;
  if (arr[n - 1] <= sum)
    matrix[n][sum] =
      recursiveMemoisedSolve(arr, sum - arr[n - 1], n - 1, matrix) +
      recursiveMemoisedSolve(arr, sum, n - 1, matrix);
  else matrix[n][sum] = recursiveMemoisedSolve(arr, sum, n - 1, matrix);
  return matrix[n][sum];
}

// console.log(recursiveMemoisedCountSubsetSum([2, 3, 5, 6, 8, 10], 10));

// 3. top down iterative
function iterativeCountSubsetSum(arr, sum) {
  const n = arr.length;
  const rows = n + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++)
    for (let j = 0; j < cols; j++) if (j === 0) matrix[i][j] = 1;

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (arr[i - 1] <= j)
        matrix[i][j] = matrix[i - 1][j - arr[i - 1]] + matrix[i - 1][j];
      else matrix[i][j] = matrix[i - 1][j];
    }
  }
  return matrix[n][sum];
}

// console.log(iterativeCountSubsetSum([2, 3, 5, 6, 8, 10], 10));

// 4. space optimised top down

function iterativeSpaceOptimisedCountSubsetSum(arr, sum) {
  const len = arr.length;
  const dp = new Array(sum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < len; i++)
    for (let j = sum; j >= arr[i]; j--) dp[j] = dp[j - arr[i]] + dp[j];
  return dp[sum];
}

console.log(iterativeSpaceOptimisedCountSubsetSum([2, 3, 5, 6, 8, 10], 10));
