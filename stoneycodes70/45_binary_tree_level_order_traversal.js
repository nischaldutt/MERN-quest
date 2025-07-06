var levelOrder = function (root) {
  if (root === null) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val);
      queue.shift();
    }
    result.push(level);
  }
  return result;
};
