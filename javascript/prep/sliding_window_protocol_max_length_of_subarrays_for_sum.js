function maxLengthOfSubarraysOfGivenSum(arr, k) {
  let result = -Infinity;
  let sum = 0;
  let i = 0;
  let j = 0;
  const len = arr.length;
  while (j < len) {
    sum += arr[j];
    if (sum < k) j++;
    else if (sum === k) {
      result = Math.max(result, j - i + 1);
      sum -= arr[i];
      i++;
      j++;
    } else if (sum > k) {
      while (sum > k) {
        sum -= arr[i];
        i++;
      }
      j++;
    }
  }
  return result;
}

console.log(maxLengthOfSubarraysOfGivenSum([4, 1, 1, 1, 2, 3, 5], 5));
