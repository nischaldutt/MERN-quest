var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function height(node) {
    if (!node) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    diameter = Math.max(diameter, leftHeight + rightHeight);
    return 1 + Math.max(leftHeight, rightHeight);
  }
  height(root);
  return diameter;
};
