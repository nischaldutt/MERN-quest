function lengthOfLongestCommonSubstring(str1, str2) {
  const rows = str1.length + 1;
  const cols = str2.length + 1;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) dp[i][j] = 0;
    }
  }

  let result = 0;
  let endIndex = 0;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        if (result < dp[i][j]) {
          result = Math.max(result, dp[i][j]);
          endIndex = i;
        }
      } else dp[i][j] = 0;
    }
  }
  return { dp, maxLength: result, endIndex };
}

// console.log(lengthOfLongestCommonSubstring("abcdgh", "abedfhr"));

function printLongestCommonSubstring(str1, str2) {
  let { dp, maxLength, endIndex } = lengthOfLongestCommonSubstring(str1, str2);
  let i = endIndex;
  const result = [];

  while (maxLength > 0) {
    result.push(str1[i - 1]);
    i--;
    maxLength--;
  }
  return result.reverse().join("");
}

console.log(printLongestCommonSubstring("abcdgh", "abedfhr"));
