class Stack {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  pop() {
    return this.arr.pop();
  }

  size() {
    return this.arr.length;
  }

  top() {
    return this.arr[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }
}
