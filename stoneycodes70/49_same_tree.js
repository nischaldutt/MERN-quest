var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p) return false;
  if (!q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
