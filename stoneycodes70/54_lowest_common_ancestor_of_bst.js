var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null;
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  else if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  return root;
};
