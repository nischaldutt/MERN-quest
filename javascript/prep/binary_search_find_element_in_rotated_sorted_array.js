function findMinIndex(arr) {
  const len = arr.length;
  if (len === 0) return -1;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    if (arr[start] < arr[end]) return start;

    const mid = Math.floor(start + (end - start) / 2);
    const next = (mid + 1) % len;
    const prev = (mid - 1 + len) % len;

    if (arr[mid] < arr[next] && arr[mid] < arr[prev]) return mid;
    else if (arr[start] <= arr[mid]) start = mid + 1;
    else if (arr[mid] <= arr[end]) end = mid - 1;
  }
  return -1;
}

function binarySearch(arr, start, end, value) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

function findElementInRotateSortedArray(arr, value) {
  const len = arr.length;
  const minIndex = findMinIndex(arr);
  if (minIndex === -1) return -1;
  if (minIndex === 0) return binarySearch(arr, 0, len - 1, value);

  if (arr[minIndex] === value) return minIndex;
  else if (arr[0] < value && value < arr[minIndex - 1])
    return binarySearch(arr, 0, minIndex - 1, value);
  else if (arr[minIndex] < value && value < arr[len - 1])
    return binarySearch(arr, minIndex, len - 1, value);
  return -1;
}

console.log(findElementInRotateSortedArray([11, 12, 15, 18, 2, 5, 6, 8], 16));
console.log(findElementInRotateSortedArray([2, 3, 4, 5], 1));
