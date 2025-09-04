var findTarget = function (root, k) {
  function inOrder(node, arr) {
    if (node === null) return arr;
    inOrder(node.left, arr);
    arr.push(node.val);
    inOrder(node.right, arr);
    return arr;
  }
  const sortedArray = inOrder(root, []);
  let l = 0;
  let r = sortedArray.length - 1;
  let sum = 0;
  while (l < r) {
    sum = sortedArray[l] + sortedArray[r];
    if (sum === k) return true;
    else if (sum < k) l++;
    else r--;
  }
  return false;
};
