function longestCommonSubsequence(str1, str2) {
  const rows = str1.length + 1;
  const cols = str2.length + 1;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  let i = str1.length;
  let j = str2.length;
  const result = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      result.push(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i][j - 1] >= dp[i - 1][j]) j--;
    else i--;
  }
  return result.reverse().join("");
}

function shortestCommonSuperSequence(str1, str2) {
  const lcs = longestCommonSubsequence(str1, str2);
  let i = 0;
  let j = 0;
  let k = 0;
  const result = [];
  while (i < str1.length && j < str2.length) {
    if (lcs[k] === str1[i] && lcs[k] === str2[j]) {
      result.push(lcs[k]);
      i++;
      j++;
      k++;
    } else if (lcs[k] !== str1[i] && lcs[k] === str2[j]) {
      result.push(str1[i]);
      i++;
    } else if (lcs[k] === str1[i] && lcs[k] !== str2[j]) {
      result.push(str2[j]);
      j++;
    } else {
      result.push(str1[i], str2[j]);
      i++;
      j++;
    }
  }
  while (i < str1.length) {
    result.push(str1[i]);
    i++;
  }
  while (j < str2.length) {
    result.push(str2[j]);
    j++;
  }
  return result.join("");
}

// console.log(shortestCommonSuperSequence("geek", "eke"));
console.log(shortestCommonSuperSequence("aggtab", "gxtxayb"));
