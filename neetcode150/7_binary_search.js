var search = function (nums, target) {
  const len = nums.length;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
};
