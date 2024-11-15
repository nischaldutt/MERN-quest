function binarySearchInNearlySortedArray(arr, value) {
  const len = arr.length;
  if (len === 0) return -1;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return mid;
    else if (start <= mid - 1 && arr[mid - 1] === value) return mid - 1;
    else if (end >= mid + 1 && arr[mid + 1] === value) return mid + 1;
    else if (arr[mid] > value) end = mid - 2;
    else if (arr[mid] < value) start = mid + 2;
  }
  return -1;
}

console.log(binarySearchInNearlySortedArray([5, 10, 30, 20, 40], 10));
