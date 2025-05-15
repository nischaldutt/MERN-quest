class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex] === undefined)
      this.adjacencyList[vertex] = new Set();
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] === undefined) this.addVertex(vertex1);
    if (this.adjacencyList[vertex2] === undefined) this.addVertex(vertex2);
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex] === undefined) return;
    else {
      for (let adjacentVertex of this.adjacencyList[vertex])
        this.removeEdge(adjacentVertex, vertex);

      delete this.adjacencyList[vertex];
    }
  }

  print() {
    return this.adjacencyList;
  }

  bfs(root) {
    const visited = new Set();
    const queue = [root];

    while (queue.length > 0) {
      const node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        for (let neighbor of this.adjacencyList[node]) {
          if (!visited.has(neighbor)) queue.push(neighbor);
        }
      }
    }
  }

  dfs(root, visited = new Set()) {
    console.log(root);
    visited.add(root);

    for (const neighbor of this.adjacencyList[root]) {
      if (!visited.has(neighbor)) this.dfs(neighbor, visited);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("a");
myGraph.addVertex("b");
myGraph.addVertex("c");
myGraph.addVertex("d");
myGraph.addVertex("e");
myGraph.addVertex("f");

myGraph.addEdge("a", "b");
myGraph.addEdge("a", "c");
myGraph.addEdge("b", "d");
myGraph.addEdge("b", "e");
myGraph.addEdge("c", "f");
myGraph.addEdge("e", "f");

console.log(myGraph.print());

myGraph.bfs("a");
console.log("===");
myGraph.dfs("a");
