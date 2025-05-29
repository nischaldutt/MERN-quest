var findCircleNum = function (isConnected) {
  const adjacencyList = {};
  const n = isConnected.length;
  for (let i = 0; i < n; i++) adjacencyList[i] = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && isConnected[i][j] === 1) {
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
        visited.add(Number(node));
        for (let v of adjacencyList[node]) {
          if (!visited.has(v)) queue.push(v);
        }
      }
    }
  }

  let count = 0;
  for (let v in adjacencyList) {
    if (!visited.has(Number(v))) {
      count++;
      bfs(v);
    }
  }
  return count;
};

findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
