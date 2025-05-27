class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
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
    if (!this.adjacencyList[vertex]) return;
    for (let v of this.adjacencyList[vertex]) this.removeEdge(v, vertex);
    delete this.adjacencyList[vertex];
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
        for (let v of this.adjacencyList[node]) {
          if (!visited.has(v)) queue.push(v);
        }
      }
    }
  }

  dfs(root, visited = new Set()) {
    console.log(root);
    visited.add(root);
    for (let v of this.adjacencyList[root]) {
      if (!visited.has(v)) this.dfs(v, visited);
    }
  }
}

const graph = new UndirectedGraph();
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");

graph.addEdge("1", "2");
graph.addEdge("1", "3");
graph.addEdge("1", "4");
graph.addEdge("2", "1");
graph.addEdge("2", "3");
graph.addEdge("2", "5");
graph.addEdge("3", "1");
graph.addEdge("3", "2");
graph.addEdge("4", "1");
graph.addEdge("4", "5");
graph.addEdge("5", "2");
graph.addEdge("5", "4");

console.log(graph.print());

graph.bfs("1");
console.log("===");
graph.dfs("1");
