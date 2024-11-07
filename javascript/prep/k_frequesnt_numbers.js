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
      this.arr[leftChildIndex].frequency < this.arr[smallestIndex].frequency
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[rightChildIndex].frequency < this.arr[smallestIndex].frequency
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

    while (
      index > 0 &&
      this.arr[parentIndex].frequency > this.arr[index].frequency
    ) {
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
      if (this.arr[i].value === value) index = i;
    }
    if (index === -1) return;

    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.minHeapify(index);
  }

  findMin() {
    if (this.isEmpty()) return;
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }
}

function topKFrequentNumbers(arr, k) {
  const len = arr.length;
  const obj = {};

  for (let i = 0; i < len; i++) {
    if (obj[arr[i]] === undefined) obj[arr[i]] = 1;
    else obj[arr[i]]++;
  }

  const minHeap = new MinHeap();
  const result = [];
  for (let key in obj) {
    minHeap.insert({ frequency: obj[key], value: key });
    if (minHeap.size() > k) {
      minHeap.remove(minHeap.findMin().value);
    }
  }

  while (!minHeap.isEmpty()) {
    const top = minHeap.findMin();
    result.push(top.value);
    minHeap.remove(top.value);
  }
  return result;
}

console.log(topKFrequentNumbers([1, 2, 1, 1, 2, 3, 4], 2));
