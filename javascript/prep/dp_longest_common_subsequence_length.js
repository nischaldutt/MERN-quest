// 1. recursion
function lengthOfLongestCommonSubsquence(str1, str2) {
  return recursiveSolve(str1, str2, str1.length, str2.length);
}

function recursiveSolve(str1, str2, n, m) {
  if (n === 0 || m === 0) return 0;
  if (str1[n - 1] === str2[m - 1])
    return 1 + recursiveSolve(str1, str2, n - 1, m - 1);
  else
    return Math.max(
      recursiveSolve(str1, str2, n - 1, m),
      recursiveSolve(str1, str2, n, m - 1)
    );
}

// console.log(lengthOfLongestCommonSubsquence("abcdgh", "abedfhr"));

// 2. memoised recursive
function memoisedLengthOfLongestCommonSubsequence(str1, str2) {
  const rows = str1.length + 1;
  const cols = str2.length + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  return memoisedSolve(matrix, str1, str2, str1.length, str2.length);
}

function memoisedSolve(matrix, str1, str2, n, m) {
  if (n === 0 || m === 0) return 0;
  if (matrix[n][m] !== -1) return matrix[n][m];

  if (str1[n - 1] === str2[m - 1])
    return (matrix[n][m] = 1 + memoisedSolve(matrix, str1, str2, n - 1, m - 1));
  else
    return (matrix[n][m] = Math.max(
      memoisedSolve(matrix, str1, str2, n - 1, m),
      memoisedSolve(matrix, str1, str2, n, m - 1)
    ));
}

// console.log(memoisedLengthOfLongestCommonSubsequence("abcdgh", "abedfhr"));

// 3. iterative
function iterativeLengthOfLongestCommonSubsequence(str1, str2) {
  const n = str1.length;
  const m = str2.length;
  const rows = n + 1;
  const cols = m + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) matrix[i][j] = 0;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (str1[i - 1] === str2[j - 1]) matrix[i][j] = 1 + matrix[i - 1][j - 1];
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }
  return matrix[n][m];
}

// console.log(iterativeLengthOfLongestCommonSubsequence("abcdgh", "abedfhr"));

// 4. optimised iterative
function optimisedLengthOfLongestCommonSubSequence(str1, str2) {
  const n = str1.length;
  const m = str2.length;
  let prev = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let curr = new Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) curr[j] = 1 + prev[j - 1];
      else curr[j] = Math.max(prev[j], curr[j - 1]);
    }
    prev = curr;
  }
  return prev[m - 1];
}

console.log(optimisedLengthOfLongestCommonSubSequence("abcdgh", "abedfhr"));
