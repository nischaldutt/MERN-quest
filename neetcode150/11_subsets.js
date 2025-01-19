var subsets = function (nums) {
  const len = nums.length;
  const result = [];
  const subset = [];

  function dfs(i) {
    if (i >= len) {
      result.push(subset.slice(0));
      return;
    } else {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
      dfs(i + 1);
    }
  }

  dfs(0);
  return result;
};
