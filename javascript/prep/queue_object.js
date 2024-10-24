class MyQueueUsingObjects {
  constructor() {
    this.obj = {};
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  enqueue(n) {
    this.obj[this.rear] = n;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      const first = this.obj[this.front];
      delete this.obj[this.front];
      this.front++;
      return first;
    } else return null;
  }

  peek() {
    return this.obj[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
