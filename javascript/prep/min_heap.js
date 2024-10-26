class MyMinHeap {
  constructor() {
    this.arr = [];
  }

  minHeapify(index) {
    let smallestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildindex = 2 * index + 2;

    if (
      leftChildIndex < this.arr.length &&
      this.arr[leftChildIndex] < this.arr[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildindex < this.arr.length &&
      this.arr[rightChildindex] < this.arr[smallestIndex]
    ) {
      smallestIndex = rightChildindex;
    }

    if (smallestIndex !== index) {
      let temp = this.arr[smallestIndex];
      this.arr[smallestIndex] = this.arr[index];
      this.arr[index] = temp;
      this.minHeapify(smallestIndex);
    }
  }

  insert(value) {
    if (this.arr.length === 0) this.arr.push(value);
    else {
      this.arr.push(value);
      for (let i = this.arr.length / 2 - 1; i >= 0; i--) {
        this.minHeapify(i);
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

    for (let i = this.arr.length / 2 - 1; i >= 0; i--) this.minHeapify(i);
  }

  findMin() {
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}
