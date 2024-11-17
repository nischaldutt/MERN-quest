function minDiffElement(arr, key) {
  const len = arr.length;
  if (len === 0) return null;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) return arr[mid];
    else if (arr[mid] > key) end = mid - 1;
    else start = mid + 1;
  }
  return Math.abs(arr[start] - key) < Math.abs(arr[end] - key)
    ? arr[start]
    : arr[end];
}

console.log(minDiffElement([1, 2, 3, 8, 10, 12, 15], 12));
