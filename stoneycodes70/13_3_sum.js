var threeSum = function (nums) {
  const len = nums.length;
  const result = [];
  nums.sort((a, b) => a - b); // 1. sort the array

  for (let [i, x] of nums.entries()) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 2. skip duplicate

    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) r--;
      else if (sum < 0) l++;
      else {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++; // 3. skip left pointer if duplicate
        while (l < r && nums[r] === nums[r - 1]) r--; // 4. skip right pointer if duplicate
        l++;
        r--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
