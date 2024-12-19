function maxSumSubarray(arr, k) {
  const len = arr.length;
  let i = 0;
  let j = 0;
  let sum = 0;
  let result = -Infinity;
  while (j < len) {
    sum += arr[j];
    let size = j - i + 1;
    if (size < k) j++;
    else if (size === k) {
      result = Math.max(result, sum);
      sum -= arr[i];
      i++;
      j++;
    }
  }
  return result;
}

console.log(maxSumSubarray([2, 5, 1, 8, 2, 9, 1], 3));
