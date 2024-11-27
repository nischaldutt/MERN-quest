// 1. recursion
function recursiveMinCoins(coins, sum) {
  return recursiveSolve(coins, sum, coins.length);
}

function recursiveSolve(coins, sum, n) {
  if (sum === 0) return 0;
  if (n === 0) return Infinity;

  if (coins[n - 1] <= sum) {
    return Math.min(
      1 + recursiveSolve(coins, sum - coins[n - 1], n),
      recursiveSolve(coins, sum, n - 1)
    );
  } else return recursiveSolve(coins, sum, n - 1);
}

// console.log(recursiveMinCoins([1, 2, 3], 10));

// 2. memoised recursive
function memoisedRecursiveMinCoin(coins, sum) {
  const len = coins.length;
  const rows = len + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));
  return memoisedRecursiveSolve(coins, sum, len, matrix);
}

function memoisedRecursiveSolve(coins, sum, n, matrix) {
  if (sum === 0) return (matrix[n][sum] = 0);
  if (n === 0) return (matrix[n][sum] = Infinity);

  if (coins[n - 1] <= sum) {
    return (matrix[n][sum] = Math.min(
      1 + memoisedRecursiveSolve(coins, sum - coins[n - 1], n, matrix),
      memoisedRecursiveSolve(coins, sum, n - 1, matrix)
    ));
  } else
    return (matrix[n][sum] = memoisedRecursiveSolve(coins, sum, n - 1, matrix));
}

// console.log(memoisedRecursiveMinCoin([1, 2, 3], 11));

// 3. iterative top down
function iterativeMinCoin(coins, sum) {
  const len = coins.length;
  const rows = len + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () =>
    new Array(cols).fill(Infinity)
  );
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j === 0) matrix[i][j] = 0;
    }
  }

  for (let j = 0; j < cols; j++) {
    if (j % coins[0] === 0) matrix[1][j] = Math.floor(j / coins[0]);
  }

  for (let i = 2; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (coins[i - 1] <= j) {
        matrix[i][j] = Math.min(
          1 + matrix[i][j - coins[i - 1]],
          matrix[i - 1][j]
        );
      } else matrix[i][j] = matrix[i - 1][j];
    }
  }
  return matrix[len][sum];
}

// console.log(iterativeMinCoin([1, 2, 3], 11));

// 4. space optimised iterative with 2 rows
function optimisedIterativeMinCoins(coins, sum) {
  const len = coins.length;
  let prev = new Array(sum + 1).fill(Infinity);
  prev[0] = 0;

  for (let j = 0; j <= sum; j++) {
    if (j % coins[0] === 0) prev[j] = Math.floor(j / coins[0]);
  }

  for (let i = 1; i < len; i++) {
    let curr = new Array(sum + 1).fill(Infinity);
    for (let j = 0; j <= sum; j++) {
      if (coins[i] <= j) {
        if (i === 1)
          console.log(
            curr[j - coins[i]],
            " ffdfd ",
            prev[j],
            "==>",
            Math.min(1 + curr[j - coins[i]], prev[j])
          );
        curr[j] = Math.min(1 + curr[j - coins[i]], prev[j]);
      } else curr[j] = prev[j];
    }
    prev = [...curr];
  }
  return prev[sum];
}

console.log(optimisedIterativeMinCoins([1, 2, 3], 11));
