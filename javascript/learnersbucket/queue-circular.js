class Queue {
  constructor(capacity) {
    this.arr = new Array(capacity);
    this.front = -1;
    this.rear = -1;
    this.len = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.len === this.capacity;
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }

  enqueue(n) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.arr[this.rear] = n;
      this.len++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const last = this.arr[this.front];
      this.arr[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.len--;
      if (this.isEmpty()) {
        this.front--;
        this.rear--;
      }
      return last;
    }
  }

  peek() {
    if (!this.isEmpty()) return this.arr[this.front];
  }
}
