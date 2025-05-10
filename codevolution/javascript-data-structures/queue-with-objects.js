class Queue {
  constructor() {
    this.obj = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(n) {
    this.obj[this.rear] = n;
    this.rear++;
  }

  dequeue() {
    const first = this.obj[this.front];
    delete this.obj[this.front];
    this.front++;
    return first;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }

  peek() {
    return this.obj[this.front];
  }
}
