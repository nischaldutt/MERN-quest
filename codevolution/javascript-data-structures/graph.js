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
}
