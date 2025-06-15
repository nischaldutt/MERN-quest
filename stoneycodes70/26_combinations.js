var combine = function (n, k) {
  const result = [];

  function solve(index, output) {
    if (output.length === k) {
      result.push([...output]);
      return;
    }
    for (let i = index; i <= n; i++) {
      output.push(i);
      solve(i + 1, output);
      output.pop();
    }
  }

  solve(1, []);
  return result;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
