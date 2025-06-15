var combinationSum3 = function (k, n) {
  const arr = Array.from({ length: 9 }, (_, i) => i + 1);
  const len = arr.length;
  const result = [];

  function solve(sum, index, output, count) {
    if (sum === n && count === 0) {
      result.push([...output]);
      return;
    }
    if (sum > n || index >= len) return;
    output.push(arr[index]);
    solve(sum + arr[index], index + 1, output, count - 1);
    output.pop();
    solve(sum, index + 1, output, count);
  }

  solve(0, 0, [], k);
  return result;
};

console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));
console.log(combinationSum3(4, 1));
