class MyStackUsingObjects {
  constructor() {
    this.obj = {};
    this.len = 0;
  }

  push(n) {
    this.obj[this.len] = n;
    this.len++;
  }

  pop() {
    const last = this.obj[this.len - 1];
    delete this.obj[this.len - 1];
    this.len--;
    return last;
  }

  top() {
    return this.obj[this.len - 1];
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }
}
