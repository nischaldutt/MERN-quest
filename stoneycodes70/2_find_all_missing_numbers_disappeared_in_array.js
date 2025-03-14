// time: O(n)
// space: O(n)
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  const arr = new Array(nums.length).fill(-1);
  for (let x of nums) arr[x - 1] = x;
  const result = [];
  for (let [i, x] of arr.entries()) {
    if (x === -1) result.push(i + 1);
  }
  return result;
};

// time: O(n)
// space: O(1)
var findDisappearedNumbers2 = function (nums) {
  const result = [];
  for (let [i, x] of nums.entries()) {
    if (nums[Math.abs(x) - 1] > 0)
      nums[Math.abs(x) - 1] = -nums[Math.abs(x) - 1];
  }

  for (let [i, x] of nums.entries()) if (x > 0) result.push(i + 1);
  return result;
};
