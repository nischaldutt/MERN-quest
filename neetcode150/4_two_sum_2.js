var twoSum = function (numbers, target) {
  const len = numbers.length;
  let i = 0;
  let j = len - 1;
  let sum = 0;
  while (i < j) {
    sum = numbers[i] + numbers[j];
    if (target === sum) return [i + 1, j + 1];
    else if (target < sum) j--;
    else if (target > sum) i++;
  }
};
