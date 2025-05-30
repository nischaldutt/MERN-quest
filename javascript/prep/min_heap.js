class MyMinHeap {
  constructor() {
    this.arr = [];
  }

  minHeapify(index) {
    let smallest = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildindex = 2 * index + 2;

    if (
      leftChildIndex < this.arr.length &&
      this.arr[leftChildIndex] < this.arr[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildindex < this.arr.length &&
      this.arr[rightChildindex] < this.arr[smallest]
    ) {
      smallest = rightChildindex;
    }

    if (smallest !== index) {
      // swap the two numbers
      [this.arr[smallest], this.arr[index]] = [
        this.arr[index],
        this.arr[smallest],
      ];
      // re-minHeapify
      this.minHeapify(smallest);
    }
  }

  insert(value) {
    this.arr.push(value);
    let index = this.arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // bubble-up only the newly inserted node in the tree
    while (index > 0 && this.arr[parentIndex] > this.arr[index]) {
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
    const len = this.arr.length;
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    // re-minHeapify from the point where the node was deleted top down as rest of the tree is already heapified
    this.minHeapify(index);
  }

  findMin() {
    if (this.arr.length === 0) return;
    else return this.arr[0];
  }

  ifEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}
