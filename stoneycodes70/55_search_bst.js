var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
