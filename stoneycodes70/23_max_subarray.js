var maxSubArray = function (nums) {
  const len = nums.length;
  let result = nums[0];
  let sum = nums[0];
  for (let i = 1; i < len; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    result = Math.max(sum, result);
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
