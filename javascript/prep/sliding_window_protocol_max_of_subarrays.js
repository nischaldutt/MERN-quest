function maxOfSubarraysOfSizeK(arr, k) {
  const list = [];
  const result = [];
  let i = 0;
  let j = 0;
  const len = arr.length;
  while (j < len) {
    while (arr[j] >= list[0]) list.shift();
    list.push(arr[j]);
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      result.push(list[0]);
      if (list[0] === arr[i]) list.shift();
      i++;
      j++;
    }
  }
  return result;
}

console.log(maxOfSubarraysOfSizeK([1, 3, -1, -3, 5, 3, 6, 7], 3));
