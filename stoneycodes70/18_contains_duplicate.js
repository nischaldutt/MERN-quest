var containsNearbyDuplicate = function (nums, k) {
  const len = nums.length;
  let i = 0;
  let j = i;
  const obj = {};
  while (i <= j && j < len) {
    if (j - i + 1 <= k + 1) {
      if (obj[nums[j]] === undefined) obj[nums[j]] = 1;
      else if (Math.abs(i - j) <= k + 1) return true;
      j++;
    } else {
      delete obj[nums[i]];
      i++;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
