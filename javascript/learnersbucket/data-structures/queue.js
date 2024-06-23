class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(n) {
    this.arr.push(n);
  }

  dequeue() {
    this.arr.shift();
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.arr[0];
    else return null;
  }

  size() {
    return this.arr.length;
  }
}
