var invertTree = function (root) {
  if (root === null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  return root;
};
