class MyMaxHeap {
  constructor() {
    this.arr = [];
  }

  maxHeapify(index) {
    let largestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChidIndex = 2 * index + 2;

    if (
      leftChildIndex < this.arr.length &&
      this.arr[leftChildIndex] > this.arr[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChidIndex < this.arr.length &&
      this.arr[rightChidIndex] > this.arr[largestIndex]
    ) {
      largestIndex = rightChidIndex;
    }

    if (largestIndex !== index) {
      const temp = this.arr[largestIndex];
      this.arr[largestIndex] = this.arr[index];
      this.arr[index] = temp;
      this.maxHeapify(largestIndex);
    }
  }

  insert(value) {
    if (this.arr.length === 0) {
      this.arr.push(value);
      return;
    } else {
      this.arr.push(value);
      for (let i = parseInt(this.arr.length / 2 - 1); i >= 0; i--) {
        this.maxHeapify(i);
      }
    }
  }

  remove(value) {
    let index = 0;
    for (index = 0; index < this.arr.length; index++) {
      if (this.arr[index] === value) break;
    }

    const len = this.arr.length;
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();

    for (let i = parseInt(this.arr.length / 2 - 1);; i >= 0; i--) this.maxHeapify(i);
  }

  findMax() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
