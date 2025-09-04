var sortedArrayToBST = function (nums) {
  function solve(left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = solve(left, mid - 1);
    root.right = solve(mid + 1, right);
    return root;
  }
  return solve(0, nums.length - 1);
};
