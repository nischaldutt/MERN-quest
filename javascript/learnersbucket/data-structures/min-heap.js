class MinHeap {
  constructor() {
    this.arr = [];
  }

  minHeapify(index) {
    let smallest = index;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex < this.arr.length &&
      this.arr[leftChildIndex] < this.arr[smallest]
    )
      smallest = leftChildIndex;

    if (
      rightChildIndex < this.arr.length &&
      this.arr[rightChildIndex] < this.arr[smallest]
    )
      smallest = rightChildIndex;

    if (smallest !== index) {
      [this.arr[smallest], this.arr[index]] = [
        this.arr[index],
        this.arr[smallest],
      ];

      this.minHeapify(smallest);
    }
  }

  insert(value) {
    if (this.arr.length === 0) this.arr.push(value);
    else {
      this.arr.push(value);

      for (let i = parseInt(this.arr.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(i);
      }
    }
  }

  remove(value) {
    let index = 0;

    for (index = 0; index < this.arr.length; index++) {
      if (this.arr[index] === value) break;
    }

    [this.arr[index], this.arr[this.arr.length - 1]] = [
      this.arr[this.arr.length - 1],
      ,
      this.arr[index],
    ];

    this.arr.splice(this.arr.length - 1);

    for (let i = parseInt(this.arr.length / 2 - 1); i >= 0; i--) {
      this.minHeapify(i);
    }
  }

  findMin() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  print() {
    console.log(this.arr);
  }
}
