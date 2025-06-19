var permute = function (nums) {
  const result = [];

  function solve(output) {
    if (output.length === nums.length) {
      result.push([...output]);
      return;
    }
    for (let n of nums) {
      if (output.findIndex((x) => x === n) === -1) {
        output.push(n);
        solve(output);
        output.pop();
      }
    }
  }

  solve([]);
  return result;
};

console.log(permute([1, 2, 3]));
console.log(permute([0, 1]));
console.log(permute([1]));
