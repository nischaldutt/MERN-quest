class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(n) {
    this.arr.push(n);
  }

  dequeue() {
    if (!this.isEmpty()) this.arr.shift();
    return;
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    if (!this.isEmpty()) return this.arr[0];
    return null;
  }
}
