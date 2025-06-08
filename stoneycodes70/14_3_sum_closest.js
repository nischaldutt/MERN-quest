var threeSumClosest = function (nums, target) {
  let minDifference = Infinity;
  let result = 0;
  const len = nums.length;
  nums.sort((a, b) => a - b);

  for (let [i, x] of nums.entries()) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const diff = Math.abs(target - sum);
      if (diff < minDifference) {
        minDifference = diff;
        result = sum;
      }
      if (sum > target) r--;
      else if (sum < target) l++;
      else {
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
