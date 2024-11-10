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
      this.arr[smallestIndex].diff > this.arr[leftChildIndex].diff
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[smallestIndex].diff > this.arr[rightChildIndex].diff
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

  insert(obj) {
    this.arr.push(obj);
    let index = this.arr.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.arr[parentIndex].diff > this.arr[index].diff) {
      [this.arr[parentIndex], this.arr[index]] = [
        this.arr[index],
        this.arr[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  remove(value) {
    const len = this.arr.length;
    let index = -1;

    for (let i = 0; i < len; i++) {
      if (this.arr[i].value === value) {
        index = i;
      }
    }
    if (index === -1) return;

    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.minHeapify(index);
  }

  findMin() {
    if (this.arr.length === 0) return;
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

function kClosestNumbers(arr, n, k) {
  const minHeap = new MinHeap();
  const len = arr.length;
  let i = 0;
  const result = [];

  while (i < len) {
    minHeap.insert({ diff: Math.abs(n - arr[i]), value: arr[i] });
    // console.log(minHeap, k);
    if (minHeap.size() > k) {
      const top = minHeap.findMin();
      result.push(top.value);
      minHeap.remove(top.value);
      break;
    }
    i++;
  }

  // console.log({ result, k });

  while (result.length < k) {
    const top = minHeap.findMin();
    result.push(top.value);
    minHeap.remove(top.value);
  }
  return result;
}

console.log(kClosestNumbers([5, 6, 7, 8, 9], 7, 3));
