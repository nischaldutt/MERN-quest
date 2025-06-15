var combinationSum = function (candidates, target) {
  const len = candidates.length;
  const result = [];

  function solve(sum, index, output) {
    if (sum === target) {
      result.push([...output]);
      return;
    }
    if (sum > target || index >= len) return;
    output.push(candidates[index]);
    solve(sum + candidates[index], index, output);
    output.pop();
    solve(sum, index + 1, output);
    // if (sum > target) return;
    // for (let i = index; i < len; i++) {
    //   output.push(candidates[i]);
    //   sum += candidates[i];
    //   solve(sum, i, output);
    //   sum -= candidates[i];
    //   output.pop();
    // }
  }

  solve(0, 0, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
