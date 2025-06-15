var subsets = function (nums) {
  const result = [];
  solve(nums, 0, [], result);
  return result;
};

function solve(nums, index, output, result) {
  if (index === nums.length) {
    result.push([...output]);
    return;
  }
  output.push(nums[index]);
  solve(nums, index + 1, output, result);
  output.pop();
  solve(nums, index + 1, output, result);
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
