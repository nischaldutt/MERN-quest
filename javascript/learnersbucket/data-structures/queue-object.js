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
    const last = this.obj[this.front];
    delete this.obj[this.front];
    this.front++;
    return last;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  peek() {
    return this.obj[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}
