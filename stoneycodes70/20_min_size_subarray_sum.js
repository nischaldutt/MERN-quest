var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  let i = 0;
  let j = i;
  let sum = 0;
  let result = Infinity;
  while (i <= j && j < len) {
    sum += nums[j];
    if (sum < target) j++;
    else {
      while (i <= j && sum >= target) {
        result = Math.min(result, j - i + 1);
        sum -= nums[i];
        i++;
      }
      j++;
    }
  }
  return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
