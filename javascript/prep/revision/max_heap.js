class OptimisedMaxHeap {
  constructor() {
    this.arr = [];
  }

  maxHeapify(index) {
    let largestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    const len = this.arr.length;

    if (
      leftChildIndex < len &&
      this.arr[leftChildIndex] > this.arr[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[rightChildIndex] > this.arr[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (index !== largestIndex) {
      [this.arr[index], this.arr[largestIndex]] = [
        this.arr[largestIndex],
        this.arr[index],
      ];
      // re-maxheapify the lower tree
      this.maxHeapify(largestIndex);
    }
  }

  insert(value) {
    // 1. push value to the end of the array
    this.arr.push(value);
    const len = this.arr.length;
    let index = len - 1;
    // 2. bubble up the newly inserted node until it reaches its appropriate position
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
    let len = this.arr.length;
    // 1. find the node
    let index = this.arr.indexOf(value);
    if (index === -1) return;
    // 2. swap the node with last element
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    // 3. delete the last node
    this.arr.pop();
    // 4. re-maxheapify the tree from the unbalance node
    this.maxHeapify(index);
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  findMax() {
    if (this.isEmpty()) return;
    else return this.arr[0];
  }
}
