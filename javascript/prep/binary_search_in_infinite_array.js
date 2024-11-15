function binarySearch(arr, start, end, value) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

function searchInInfiniteArray(arr, value) {
  let start = 0;
  let end = 1;

  while (arr[end] < value) {
    start = end;
    end = 2 * end;
  }
  return binarySearch(arr, start, end, value);
}

console.log(
  searchInInfiniteArray(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    9
  )
);
