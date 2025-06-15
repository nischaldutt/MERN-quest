var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const len = candidates.length;
  const result = [];

  function solve(sum, index, output) {
    if (sum === target) {
      result.push([...output]);
      return;
    }
    if (sum > target || index >= len) return;
    for (let i = index; i < len; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      output.push(candidates[i]);
      solve(sum + candidates[i], i + 1, output);
      output.pop();
    }
    // output.push(candidates[index]);
    // solve(sum + candidates[index], index + 1, output);

    // let nextIndex = index + 1;
    // while (nextIndex < len && candidates[nextIndex] === candidates[index]) {
    //   nextIndex++;
    // }

    // output.pop();
    // solve(sum, nextIndex, output);
  }

  solve(0, 0, []);
  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
