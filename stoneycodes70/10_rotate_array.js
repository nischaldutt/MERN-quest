var rotate = function (nums, k) {
  const len = nums.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr[(i + k) % len] = nums[i];
  }
  for (let i = 0; i < len; i++) {
    nums[i] = arr[i];
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
