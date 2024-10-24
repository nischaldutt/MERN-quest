class MyStack {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  pop() {
    return this.arr.pop();
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}
