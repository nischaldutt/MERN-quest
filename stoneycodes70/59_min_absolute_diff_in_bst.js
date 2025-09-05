var getMinimumDifference = function (root) {
  let prev = null;
  let min = Infinity;
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    if (prev !== null) min = Math.min(min, node.val - prev);
    prev = node.val;
    inOrder(node.right);
  }
  inOrder(root);
  return min;
};
