function findPeakElement(arr) {
  const len = arr.length;
  if (len === 0) return 0;

  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (mid > 0 && mid < len - 1) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
      else if (arr[mid - 1] > arr[mid]) end = mid - 1;
      else if (arr[mid + 1] > arr[mid]) start = mid + 1;
    } else if (mid === 0) return arr[0] > arr[1] ? 0 : 1;
    else if (mid === len - 1) arr[len - 1] > arr[len - 2] ? len - 1 : len - 2;
  }
}

console.log(findPeakElement([10, 20, 15, 2, 23, 90, 67]));
