function allocateMinPages(arr, k) {
  const len = arr.length;
  if (len < k) return -1;

  let start = Math.max(...arr);
  let end = 0;
  for (let n of arr) end += n;
  let result = -1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (isValid(arr, k, mid)) {
      result = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return result;
}

function isValid(arr, k, mid) {
  let count = 1;
  let sum = 0;
  for (let n of arr) {
    sum += n;
    if (sum > mid) {
      count++;
      sum = n;
    }
  }
  if (count > k) return false;
  return true;
}

console.log(allocateMinPages([12, 34, 67, 90], 2));
