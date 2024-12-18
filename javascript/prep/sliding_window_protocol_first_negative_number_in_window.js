function firstNegativeNumberInWindow(arr, k) {
  const len = arr.length;
  const result = [];
  let i = 0;
  let j = 0;
  const list = [];
  while (j < len) {
    if (arr[j] < 0) list.push(arr[j]);
    if (j - i + 1 < k) j++;
    else if (j - i + 1 === k) {
      if (list.length === 0) result.push(0);
      else {
        result.push(list[0]);
        if (arr[i] === list[0]) list.shift();
      }
      i++;
      j++;
    }
  }
  return result;
}

console.log(firstNegativeNumberInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3));
