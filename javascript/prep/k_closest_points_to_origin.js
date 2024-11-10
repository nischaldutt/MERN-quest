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
      this.arr[leftChildIndex].value > this.arr[largestIndex].value
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < len &&
      this.arr[rightChildIndex].value > this.arr[largestIndex].value
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.arr[largestIndex], this.arr[index]] = [
        this.arr[index],
        this.arr[largestIndex],
      ];
      largestIndex = index;
      this.maxHeapify(largestIndex);
    }
  }

  insert(obj) {
    this.arr.push(obj);
    const len = this.arr.length;
    let index = len - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.arr[parentIndex].value < this.arr[index].value) {
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
    let len = this.arr.length;
    for (let i = 0; i < len; i++) {
      if (this.arr[i].value === value) {
        index = i;
      }
    }
    if (index === -1) return;

    [this.arr[len - 1], this.arr[index]] = [this.arr[index], this.arr[len - 1]];
    this.arr.pop();
    this.maxHeapify(index);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  findMax() {
    if (this.arr.length === 0) return;
    else return this.arr[0];
  }

  size() {
    return this.arr.length;
  }
}

function kClosestPointToOrigin(points, k) {
  const maxHeap = new MaxHeap();
  const result = [];

  for (let [x, y] of points) {
    maxHeap.insert({ x, y, value: Math.pow(x, 2) + Math.pow(y, 2) });
    if (maxHeap.size() > k) {
      const top = maxHeap.findMax();
      maxHeap.remove(top.value);
    }
  }

  while (!maxHeap.isEmpty()) {
    const top = maxHeap.findMax();
    result.push(top);
    maxHeap.remove(top.value);
  }

  return result;
}

console.log(
  kClosestPointToOrigin(
    [
      [1, 3],
      [-2, 2],
      [5, 8],
      [0, 1],
    ],
    1
  )
);
