// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var balanceBST = function (root) {
  const arr = [];
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  }
  inOrder(root);

  const len = arr.length;
  function solve(l, r) {
    if (l > r) return null;
    const mid = Math.floor(l + (r - l) / 2);
    const newTreeNode = new TreeNode(arr[mid]);
    newTreeNode.left = solve(l, mid - 1);
    newTreeNode.right = solve(mid + 1, r);
    return newTreeNode;
  }
  return solve(0, len - 1);
};
