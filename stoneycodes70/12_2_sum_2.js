var twoSum = function (numbers, target) {
  const len = numbers.length;
  let l = 0;
  let r = len - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum > target) r--;
    else if (sum < target) l++;
    else return [l + 1, r + 1];
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
