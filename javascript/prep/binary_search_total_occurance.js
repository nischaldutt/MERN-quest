function firstOccurance(arr, value) {
  let firstIndex = -1;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      firstIndex = mid;
      end = mid - 1;
    } else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return firstIndex;
}

function lastOccurance(arr, value) {
  let lastIndex = -1;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      lastIndex = mid;
      start = mid + 1;
    } else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return lastIndex;
}

function countOfValue(arr, value) {
  const len = arr.length;
  if (len === 0) return 0;
  const first = firstOccurance(arr, value);
  const last = lastOccurance(arr, value);
  if (first === -1 || last === -1) return 0;
  else return last - first + 1;
}

console.log(countOfValue([2, 4, 10, 10, 10, 18, 20], 10));
