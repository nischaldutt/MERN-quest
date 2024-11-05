function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }
  return [...sorted, ...left, ...right];
}

console.log(mergeSort([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
