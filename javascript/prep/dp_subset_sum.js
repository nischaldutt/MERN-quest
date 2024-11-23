// 1. recursion
function recursiveSubsetSum(arr, sum) {
  return recursiveSolve(arr, sum, arr.length);
}

function recursiveSolve(arr, sum, n) {
  if (sum === 0) return true;
  if (n === 0) return false;

  const exclude = recursiveSolve(arr, sum, n - 1);
  if (arr[n - 1] <= sum) {
    const include = recursiveSolve(arr, sum - arr[n - 1], n - 1);
    return include || exclude;
  } else return exclude;
}

// console.log(recursiveSubsetSum([2, 3, 7, 8, 10], 11));

// 2. memoised recursion

function recursiveMemoisedSubsetSum(arr, sum) {
  const rows = arr.length + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  return recursiveMemoisedSolve(matrix, arr, sum, arr.length);
}

function recursiveMemoisedSolve(matrix, arr, sum, n) {
  if (sum === 0) return (matrix[n][sum] = true);
  if (n === 0) return (matrix[n][sum] = false);
  if (matrix[n][sum] !== -1) return matrix[n][sum];

  const exclude = recursiveMemoisedSolve(matrix, arr, sum, n - 1);
  if (arr[n - 1] <= sum) {
    const include = recursiveMemoisedSolve(
      matrix,
      arr,
      sum - arr[n - 1],
      n - 1
    );
    return (matrix[n][sum] = include || exclude);
  } else return (matrix[n][sum] = exclude);
}

// console.log(recursiveMemoisedSubsetSum([2, 3, 7, 8, 10], 11));

// 3. top down iterative

function iterativeSubsetSum(arr, sum) {
  const n = arr.length;
  const rows = n + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () =>
    new Array(cols).fill(false)
  );
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j === 0) matrix[i][j] = true;
      else if (i === 0) matrix[i][j] = false;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const exclude = matrix[i - 1][j];
      if (arr[i - 1] <= j) {
        const include = matrix[i - 1][j - arr[i - 1]];
        matrix[i][j] = include || exclude;
      } else matrix[i][j] = exclude;
    }
  }
  return matrix[n][sum];
}

// console.log(iterativeSubsetSum([2, 3, 7, 8, 10], 11));

// 4. space optimised top down iterative
function spaceOptimisedIterativeSubsetSum(arr, sum) {
  const len = arr.length;
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < len; i++) {
    for (let j = sum; j >= arr[i]; j--) {
      dp[j] = dp[j - arr[i]] || dp[j];
    }
  }
  return dp[sum];
}

console.log(spaceOptimisedIterativeSubsetSum([2, 3, 7, 8, 10], 11));
