var twoSum = function (nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        if (target === nums[i] + nums[j]) return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  const obj = {};
  const len = nums.length;
  const sumToAchieve = target;
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i];
    }
    obj[sumToAchieve - nums[i]] = i;
  }
};
