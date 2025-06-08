var minimumAbsDifference = function (arr) {
  const len = arr.length;
  arr.sort((a, b) => a - b);
  const result = [];
  let minDiff = Infinity;

  for (let i = 1; i < len; i++)
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);

  for (let i = 1; i < len; i++)
    if (arr[i] - arr[i - 1] === minDiff) result.push([arr[i - 1], arr[i]]);

  return result;
};

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
