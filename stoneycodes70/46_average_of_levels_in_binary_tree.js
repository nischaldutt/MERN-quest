var averageOfLevels = function (root) {
  const result = [];
  const queue = [root];
  while (queue.length) {
    let sum = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      sum += node.val;
      queue.shift();
    }
    result.push(+(sum / len).toFixed(5));
  }
  return result;
};
