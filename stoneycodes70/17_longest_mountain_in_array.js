var longestMountain = function (arr) {
  const len = arr.length;
  let result = 0;
  for (let i = 1; i < len - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let l = i - 1;
      let r = i + 1;
      while (l > 0 && arr[l] > arr[l - 1]) l--;
      while (r < len - 1 && arr[r] > arr[r + 1]) r++;
      result = Math.max(result, r - l + 1);
      i = r;
    }
  }
  return result;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
