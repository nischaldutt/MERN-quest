// 1. recursion
function recursiveMatrixChainMultiplication(arr) {
  return recursiveSolve(arr, 1, arr.length - 1);
}

function recursiveSolve(arr, i, j) {
  if (i >= j) return 0;
  let result = Infinity;
  for (let k = i; k < j; k++) {
    console.log({
      [i]: arr[i - 1],
      k: arr[k],
      [j]: arr[j],
      product: arr[i - 1] * arr[k] * arr[j],
    });
    let temp =
      arr[i - 1] * arr[k] * arr[j] +
      recursiveSolve(arr, i, k) +
      recursiveSolve(arr, k + 1, j);
    result = Math.min(result, temp);
  }
  return result;
}

// console.log(recursiveMatrixChainMultiplication([40, 20, 20, 10, 30]));
// console.log(recursiveMatrixChainMultiplication([10, 30, 20, 10]));

// 2. memoised recursive
function memoisedRecursiveMatrixChainMultiplication(arr) {
  const len = arr.length;
  const t = Array.from({ length: len }, () => new Array(len).fill(-1));
  return memoisedSolve(t, arr, 1, len - 1);
}

function memoisedSolve(t, arr, i, j) {
  if (i >= j) return (t[i][j] = 0);
  if (t[i][j] !== -1) return t[i][j];

  let result = Infinity;
  for (let k = i; k < j; k++) {
    let temp =
      arr[i - 1] * arr[k] * arr[j] +
      memoisedSolve(t, arr, i, k) +
      memoisedSolve(t, arr, k + 1, j);
    result = Math.min(result, temp);
  }
  return (t[i][j] = result);
}

// console.log(memoisedRecursiveMatrixChainMultiplication([10, 30, 20, 10]));

// 3. iterative
function iterativeMatrixChainMultiplication(arr) {
  const len = arr.length;
  const dp = Array.from({ length: len }, () => new Array(len).fill(0));
  for (let i = len - 1; i >= 1; i--) {
    for (let j = i + 1; j < len; j++) {
      let result = Infinity;
      for (let k = i; k < j; k++) {
        let temp = arr[i - 1] * arr[k] * arr[j] + dp[i][k] + dp[k + 1][j];
        result = Math.min(result, temp);
      }
      dp[i][j] = result;
    }
  }
  return dp[1][len - 1];
}

console.log(iterativeMatrixChainMultiplication([10, 30, 20, 10]));
