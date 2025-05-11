class MinHeap {
  constructor() {
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  minHeapify(index) {
    let smallestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    const len = this.size();

    if (
      leftChildIndex < len &&
      this.arr[leftChildIndex] < this.arr[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[rightChildIndex] < this.arr[smallestIndex]
    ) {
      rightChildIndex = smallestIndex;
    }

    if (smallestIndex !== index) {
      [this.arr[smallestIndex], this.arr[index]] = [
        this.arr[index],
        this.arr[smallestIndex],
      ];
      this.minHeapify(smallestIndex);
    }
  }

  insert(value) {
    this.arr.push(value);
    let index = this.size() - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.arr[index] < this.arr[parentIndex]) {
      [this.arr[index], this.arr[parentIndex]] = [
        this.arr[parentIndex],
        this.arr[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove(value) {
    const index = this.arr.indexOf(value);
    if (index === -1) return;
    const len = this.size();
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.minHeapify(index);
  }
}
