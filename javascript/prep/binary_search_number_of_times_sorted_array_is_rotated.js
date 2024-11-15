function findMinIndex(arr) {
  const len = arr.length;
  if (len === 0) return -1;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    if (arr[start] <= arr[end]) return start;

    const mid = Math.floor(start + (end - start) / 2);
    const next = (mid + 1) % len;
    const prev = (mid - 1 + len) % len;

    if (arr[mid] < arr[next] && arr[mid] < arr[prev]) return mid;
    else if (arr[start] <= arr[mid]) start = mid + 1;
    else if (arr[mid] <= arr[end]) end = mid - 1;
  }
  return -1;
}

function findNumberOfTimesSortedArrayIsRotated(arr) {
  return findMinIndex(arr);
}

console.log(
  findNumberOfTimesSortedArrayIsRotated([11, 12, 15, 18, 2, 5, 6, 8])
);
