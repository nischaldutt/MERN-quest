function firstOccurance(arr, value) {
  let firstOccurance = -1;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      firstOccurance = mid;
      end = mid - 1;
    } else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return firstOccurance;
}

function lastOccurance(arr, value) {
  let lastOccurance = -1;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) {
      lastOccurance = mid;
      start = mid + 1;
    } else if (arr[mid] > value) end = mid - 1;
    else start = mid + 1;
  }
  return lastOccurance;
}

function firstAndLastOccurance(arr, value) {
  const len = arr.length;
  if (len === 0) return -1;

  return {
    first: firstOccurance(arr, value),
    last: lastOccurance(arr, value),
  };
}

console.log(firstAndLastOccurance([2, 4, 10, 10, 10, 18, 20], 10));
