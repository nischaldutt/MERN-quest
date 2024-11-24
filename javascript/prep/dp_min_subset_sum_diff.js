function minSubsetSumDiff(arr) {
  const len = arr.length;
  let sum = 0;
  for (let n of arr) sum += n;

  const rows = len + 1;
  const cols = sum + 1;
  const matrix = Array.from({ length: rows }, () => new Array(cols).fill(-1));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (j === 0) matrix[i][j] = true;
      else if (i === 0) matrix[i][j] = false;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (arr[i - 1] <= j)
        matrix[i][j] = matrix[i - 1][j - arr[i - 1]] || matrix[i - 1][j];
      else matrix[i][j] = matrix[i - 1][j];
    }
  }

  const temp = [];
  for (let j = 0; j <= Math.floor(sum / 2); j++)
    if (matrix[len][j]) temp.push(j);
  console.log(temp);
  let minDiff = Infinity;
  for (let s of temp) minDiff = Math.min(minDiff, sum - 2 * s);
  return minDiff;
}

// console.log(minSubsetSumDiff([1, 6, 11, 5]));
// console.log(minSubsetSumDiff([1, 2, 7]));

// 2. space optimised
function spaceOptimisedMinSubsetSumDiff(arr) {
  const len = arr.length;
  let sum = 0;
  for (let n of arr) sum += n;

  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < len; i++) {
    for (let j = sum; j >= arr[i]; j--) {
      dp[j] = dp[j - arr[i]] || dp[j];
    }
  }

  console.log(dp);
  const temp = [];
  for (let j = 0; j <= Math.floor(sum / 2); j++) if (dp[j]) temp.push(j);
  let minDiff = Infinity;
  for (let s of temp) minDiff = Math.min(minDiff, sum - 2 * s);
  return minDiff;
}

// console.log(minSubsetSumDiff([1, 6, 11, 5]));
console.log(spaceOptimisedMinSubsetSumDiff([1, 2, 7]));
