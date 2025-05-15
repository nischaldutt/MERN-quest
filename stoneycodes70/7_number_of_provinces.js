var findCircleNum = function (isConnected) {
  const adjacencyList = {};
  const n = isConnected.length;
  for (let i = 0; i < n; i++) adjacencyList[i] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1 && i !== j) {
        adjacencyList[i].push(j);
      }
    }
  }

  const visited = new Set();
  function bfs(root) {
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        visited.add(node);
        for (const neighbor of adjacencyList[node]) {
          if (!visited.has(neighbor)) queue.push(neighbor);
        }
      }
    }
  }

  let result = 0;
  for (let key in adjacencyList) {
    const node = Number(key);
    if (!visited.has(node)) {
      bfs(node);
      result++;
    }
  }

  return result;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
