function floorOfElementInSortedArray(arr, value) {
  const len = arr.length;
  if (len === 0) return null;

  let result = -1;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return arr[mid];
    else if (arr[mid] > value) end = mid - 1;
    else if (arr[mid] < value) {
      result = Math.max(result, arr[mid]);
      start = mid + 1;
    }
  }
  return result;
}

function ceilOfElementInSortedArray(arr, value) {
  const len = arr.length;
  if (len === 0) return null;

  let result = -1;
  let start = 0;
  let end = len - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === value) return arr[mid];
    else if (arr[mid] > value) {
      result = arr[mid];
      end = mid - 1;
    } else if (arr[mid] < value) start = mid + 1;
  }
  return result;
}

console.log(floorOfElementInSortedArray([1, 2, 3, 4, 8, 10, 10, 12, 19], 5));
console.log(ceilOfElementInSortedArray([1, 2, 3, 4, 8, 10, 10, 12, 19], 5));
