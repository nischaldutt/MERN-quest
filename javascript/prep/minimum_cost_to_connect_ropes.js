class MinHeap {
  constructor() {
    this.arr = [];
  }

  minHeapify(index) {
    let smallestIndex = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    const len = this.arr.length;

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
      smallestIndex = rightChildIndex;
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
    const len = this.arr.length;
    let index = len - 1;
    let parentIndex = Math.floor((index - 1) / 2);

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
    let index = -1;
    const len = this.arr.length;
    for (let i = 0; i < len; i++) {
      if (this.arr[i] === value) {
        index = i;
      }
    }
    if (index === -1) return;

    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.minHeapify(index);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  findMin() {
    if (this.isEmpty()) return;
    else return this.arr[0];
  }

  size() {
    return this.arr.length;
  }
}

function minCostToConnectRopes(lengths) {
  let totalMinCost = 0;
  const minHeap = new MinHeap();
  for (let value of lengths) minHeap.insert(value);

  while (minHeap.size() > 1) {
    const first = minHeap.findMin();
    minHeap.remove(first);
    const second = minHeap.findMin();
    minHeap.remove(second);

    let minCost = Math.floor(first + second);
    minHeap.insert(minCost);
    totalMinCost += minCost;
  }

  return totalMinCost;
}

console.log(minCostToConnectRopes([1, 2, 3, 4, 5, 6]));
