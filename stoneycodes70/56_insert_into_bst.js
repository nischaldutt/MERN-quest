var insertIntoBST = function (root, val) {
  const node = new TreeNode(val, null, null);
  if (root === null) return node;
  let current = root;
  let parent = null;
  while (current !== null) {
    parent = current;
    if (val < current.val) current = current.left;
    else current = current.right;
  }
  if (val < parent.val) parent.left = node;
  else parent.right = node;
  return root;
};
