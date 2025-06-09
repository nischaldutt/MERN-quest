var coinChange = function (coins, amount) {
  return recursiveSol(coins, coins.length, amount);
};

function recursiveSol(coins, n, amount) {
  if (amount === 0) return 0;
  if (n === 0) return Infinity;
  if (coins[n - 1] <= amount) {
    return Math.min(
      1 + recursiveSol(coins, n, amount - coins[n - 1]),
      recursiveSol(coins, n - 1, amount)
    );
  } else return recursiveSol(coins, n - 1, amount);
}

// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

function memoisedRecursiveCoinChange(coins, amount) {
  const matrix = Array.from({ length: coins.length + 1 }, () =>
    new Array(amount + 1).fill(-1)
  );
  return memoisedRecursiveSol(coins, coins.length, amount, matrix);
}

function memoisedRecursiveSol(coins, n, amount, matrix) {
  if (matrix[n][amount] !== -1) return matrix[n][amount];
  if (amount === 0) return (matrix[n][amount] = 0);
  if (n === 0) return (matrix[n][amount] = Infinity);

  if (coins[n - 1] <= amount) {
    return (matrix[n][amount] = Math.min(
      1 + memoisedRecursiveSol(coins, n, amount - coins[n - 1], matrix),
      memoisedRecursiveSol(coins, n - 1, amount, matrix)
    ));
  } else
    return (matrix[n][amount] = memoisedRecursiveSol(
      coins,
      n - 1,
      amount,
      matrix
    ));
}

// console.log(memoisedRecursiveCoinChange([1, 2, 5], 11));
// console.log(memoisedRecursiveCoinChange([2], 3));
// console.log(memoisedRecursiveCoinChange([1], 0));

function iterativeCoinChange(coins, amount) {
  const len = coins.length;
  const rows = len + 1;
  const cols = amount + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(-1));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; i < cols; j++) {
      if (i === 0) matrix[i][j] = -1;
      if (j === 0) matrix[i][j] = 0;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (coins[i - 1] <= j) {
        matrix[i][j] = Math.min(1 + matrix[i][amount - j], matrix[i - 1][j]);
      } else matrix[i][j] = matrix[i - 1][j];
    }
  }
  return matrix[rows][cols];
}

console.log(iterativeCoinChange([1, 2, 5], 11));
console.log(iterativeCoinChange([2], 3));
console.log(iterativeCoinChange([1], 0));
