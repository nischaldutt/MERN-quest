class MaxHeap {
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
    const len = this.arr.length;
    let index = len - 1;
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

    const len = this.arr.length;
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.maxHeapify(index);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  findMax() {
    if (this.isEmpty()) return;
    else return this.arr[0];
  }

  size() {
    return this.arr.length;
  }
}

function kthSmallest(arr, k) {
  const maxHeap = new MaxHeap();
  for (let value of arr) {
    maxHeap.insert(value);
    if (maxHeap.size() > k) {
      maxHeap.remove(maxHeap.findMax());
    }
  }
  return maxHeap.findMax();
}

function sumBtwK1AntK2SmallestNumbers(arr, k1, k2) {
  const k1thSmallest = kthSmallest(arr, k1);
  const k2thSmallest = kthSmallest(arr, k2);

  console.log({ k1thSmallest, k2thSmallest });

  for (let value of arr) {
    if (value > k1thSmallest && value < k2thSmallest) {
      console.log(value);
    }
  }
}

sumBtwK1AntK2SmallestNumbers([1, 3, 12, 5, 15, 11], 3, 6);
