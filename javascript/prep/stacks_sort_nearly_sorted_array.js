class MinHeap {
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

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

// const min = new MinHeap();
// min.insert(4);
// min.insert(1);
// min.insert(8);
// min.insert(6);
// min.insert(2);
// min.insert(0);

// console.log(min);
// console.log(min.findMin());

// min.remove(2);
// console.log(min);

function sortNearlySortedArray(arr, k) {
  const minHeap = new MinHeap();
  const len = arr.length;
  const result = [];
  let i = 0;

  while (i < len) {
    minHeap.insert(arr[i]);
    if (minHeap.size() > k) {
      const top = minHeap.findMin();
      result.push(top);
      minHeap.remove(top);
    }
    i++;
  }

  while (!minHeap.isEmpty()) {
    const top = minHeap.findMin();
    result.push(top);
    minHeap.remove(top);
  }
  return result;
}

console.log(sortNearlySortedArray([6, 5, 3, 2, 8, 10, 9], 3));
