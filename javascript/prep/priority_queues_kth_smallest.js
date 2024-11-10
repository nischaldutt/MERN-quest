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
      const temp = this.arr[largestIndex];
      this.arr[largestIndex] = this.arr[index];
      this.arr[index] = temp;
      this.maxHeapify(largestIndex);
    }
  }

  insert(value) {
    if (this.arr.length === 0) this.arr.push(value);
    else {
      this.arr.push(value);
      const len = this.arr.length;
      for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
        this.maxHeapify(i);
      }
    }
  }

  remove(value) {
    const len = this.arr.length;
    let index = this.arr.indexOf(value);
    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.maxHeapify(index);
  }

  findMax() {
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

function kthSmallest(arr, k) {
  const maxHeap = new MaxHeap();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    maxHeap.insert(arr[0]);
    if (maxHeap.size() > k) {
      maxHeap.remove(maxHeap.findMax());
    }
  }
  return maxHeap.findMax();
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
