class MinHeap {
  constructor() {
    this.arr = [];
  }

  insert(value) {
    this.arr.push(value);
    const len = this.arr.length;
    let index = len - 1;
    let parentIndex = Math.floor(index / 2);
  }
}
