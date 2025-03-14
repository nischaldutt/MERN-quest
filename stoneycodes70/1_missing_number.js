// time: O(n)
// space: O(n)
var missingNumber = function (nums) {
  const n = nums.length;
  const arr = new Array(n + 1).fill(-1);
  for (let x of nums) arr[x] = x;
  for (let [i, x] of arr.entries()) {
    if (x === -1) return i;
  }
  return -1;
};

// time: O(n)
// space: O(1)
var missingNumber = function (nums) {
  const n = nums.length;
  let rangeSum = 0;
  for (let i = 0; i <= n; i++) rangeSum += i;
  let arrSum = 0;
  for (let x of nums) arrSum += x;
  return rangeSum - arrSum;
};
