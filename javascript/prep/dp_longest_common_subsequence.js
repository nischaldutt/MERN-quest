function lengthOfLongestCommonSubSequence(str1, str2) {
  const rows = str1.length + 1;
  const cols = str2.length + 2;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp;
}

// console.log(lengthOfLongestCommonSubSequence("abcdgh", "abedfhr"));

function printLongestCommonSubSequence(str1, str2) {
  const dp = lengthOfLongestCommonSubSequence(str1, str2);
  const result = [];
  let i = str1.length;
  let j = str2.length;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) i--;
    else j--;
  }
  return result.reverse().join("");
}

console.log(printLongestCommonSubSequence("abcdgh", "abedfhr"));
