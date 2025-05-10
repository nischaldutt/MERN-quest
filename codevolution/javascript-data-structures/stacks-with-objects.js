class Stack {
  constructor() {
    this.obj = {};
    this.len = 0;
  }

  push(n) {
    this.obj[this.len] = n;
    this.len++;
  }

  pop() {
    const top = this.obj[this.len - 1];
    delete this.obj[this.len - 1];
    this.len--;
    return top;
  }

  size() {
    return this.len;
  }

  top() {
    return this.obj[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }
}
