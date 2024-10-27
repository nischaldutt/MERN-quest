function binarySearch(arr, value) {
  const len = arr.length;
  if (len === 0) return -1;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] > value) end = mid - 1;
    else if (arr[mid] < value) start = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
