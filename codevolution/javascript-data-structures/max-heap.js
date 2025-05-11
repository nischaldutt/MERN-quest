class MaxHeap {
  constructor() {
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  maxHeapify(index) {
    let largestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    const len = this.size();

    if (
      leftChildIndex < len &&
      this.arr[largestIndex] < this.arr[leftChildIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[largestIndex] < this.arr[rightChildIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.arr[largestIndex], this.arr[index]] = [
        this.arr[index],
        this.arr[largestIndex],
      ];
      this.maxHeapify(largestIndex);
    }
  }

  insert(value) {
    this.arr.push(value);
    let index = this.size() - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0 && this.arr[parentIndex] < this.arr[index]) {
      [this.arr[parentIndex], this.arr[index]] = [
        this.arr[index],
        this.arr[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove(value) {
    let index = this.arr.indexOf(value);
    if (index === -1) return;
    const len = this.size();
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.maxHeapify(index);
  }

  findMax() {
    if (this.isEmpty()) return;
    else return this.arr[0];
  }
}
