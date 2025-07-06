var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let level = 1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue[0];
      if (!node.left && !node.right) return level;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      queue.shift();
    }
    level++;
  }
  return level;
};
