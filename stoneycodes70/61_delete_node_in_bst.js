// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var deleteNode = function (root, key) {
  function findMin(node) {
    if (!node) return null;
    if (!node.left) return node.val;
    else return findMin(node.left);
  }

  function remove(node) {
    if (!node) return null;
    else if (node.val > key) node.left = remove(node.left);
    else if (node.val < key) node.right = remove(node.right);
    else {
      if (!node.left && !node.right) return null;
      else if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        node.val = findMin(node.right);
        node.right = deleteNode(node.right, node.val);
      }
    }
    return node;
  }
  return remove(root);
};
