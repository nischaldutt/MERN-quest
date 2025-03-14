// time: O(n)
// space: O(n)
var twoSum = function (nums, target) {
  const obj = {};
  for (let [i, x] of nums.entries()) {
    if (obj[x] !== undefined) return [obj[x], i];
    obj[target - x] = i;
  }
};
