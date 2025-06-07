var sortedSquares = function (nums) {
  const len = nums.length;
  let l = 0;
  let r = len - 1;
  const result = [];
  while (l <= r) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      result.unshift(nums[r] * nums[r]);
      r--;
    } else {
      result.unshift(nums[l] * nums[l]);
      l++;
    }
  }
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
