var kthSmallest = function (root, k) {
  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  }
  const arr = [];
  inOrder(root);
  return arr[k - 1];
};
