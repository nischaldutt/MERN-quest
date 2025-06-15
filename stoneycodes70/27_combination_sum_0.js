var combinationSum0 = function (candidates, target) {
  const len = candidates.length;
  const result = [];

  function solve(sum, index, output) {
    if (sum === target) {
      result.push([...output]);
      return;
    }
    for (let i = 0; i < len; i++) {
      sum += candidates[i];
      if (sum <= target) {
        output.push(candidates[i]);
        solve(sum, index + 1, output);
        sum -= candidates[i];
        output.pop();
      }
    }
  }

  solve(0, 0, []);
  return result;
};

console.log(combinationSum0([2, 3, 6, 7], 7));
