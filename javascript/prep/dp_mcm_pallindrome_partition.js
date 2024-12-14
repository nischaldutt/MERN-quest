function isPallindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

// 1. recursive
function recursivePallindromePartition(str) {
  return recursiveSolve(str, 0, str.length - 1);
}

function recursiveSolve(str, i, j) {
  if (i >= j) return 0;
  if (isPallindrome(str, i, j)) return 0;
  let result = Infinity;
  for (let k = i; k < j; k++) {
    let temp = 1 + recursiveSolve(str, i, k) + recursiveSolve(str, k + 1, j);
    result = Math.min(result, temp);
  }
  return result;
}

// console.log(recursivePallindromePartition("nitik"));

// 2. memoised recursive
function memoisedPallindromePartition(str) {
  const len = str.length;
  const t = Array.from({ length: len }, () => new Array(len).fill(-1));
  return memoisedSolve(t, str, 0, len - 1);
}

function memoisedSolve(t, str, i, j) {
  if (i >= j) return (t[i][j] = 0);
  if (t[i][j] !== -1) return t[i][j];
  if (isPallindrome(str, i, j)) return (t[i][j] = 0);
  let result = Infinity;
  for (let k = i; k < j; k++) {
    let temp =
      1 + memoisedSolve(t, str, i, k) + memoisedSolve(t, str, k + 1, j);
    result = Math.min(result, temp);
  }
  return (t[i][j] = result);
}

// console.log(memoisedPallindromePartition("nitik"));

// 3. iterative bottom-up
function iterativePallindromePartition(str) {
  const len = str.length;
  const dp = Array.from({ length: len }, () => new Array(len).fill(0));

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) dp[i][j] = 0;
      else if (isPallindrome(str, i, j)) dp[i][j] = 0;
      else {
        let result = Infinity;
        for (let k = i; k < j; k++) {
          let temp = 1 + dp[i][k] + dp[k + 1][j];
          result = Math.min(result, temp);
        }
        dp[i][j] = result;
      }
    }
  }
  return dp[0][len - 1];
}

console.log(iterativePallindromePartition("nitik"));
