function kSum(nums, target, k) {
  let result = [];
  nums.sort((a, b) => a - b);

  function solve(start, k, target, path) {
    const len = nums.length;
    if (k == 2) {
      let l = start;
      let r = len - 1;
      while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum < target) l++;
        else if (sum > target) r--;
        else {
          result.push([...path, nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    } else {
      for (let i = start; i < len - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;

        // •	Since nums is sorted in ascending order, the smallest possible sum using k elements starting from nums[i] is nums[i] * k.
        // •	If nums[i] * k is already greater than target, no further combinations of k numbers (all ≥ nums[i]) can sum to target.
        if (nums[i] * k > target) break;

        // •	The maximum sum possible using the current and next k largest elements is nums[len - 1] * k.
        // •	If this is still less than the target, then even the largest numbers aren’t enough, and continuing with nums[i] is useless.
        if (nums[len - 1] * k < target) continue;

        solve(i + 1, k - 1, target - nums[i], [...path, nums[i]]);
      }
    }
  }

  solve(0, k, target, []);
  return result;
}

console.log(kSum([1, 0, -1, 0, -2, 2], 0, 4));
console.log(kSum([2, 2, 2, 2], 8, 4));
console.log(kSum([-2, -1, -1, 1, 1, 2, 2], 0, 4));
