class PriorityQueueElement {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.arr = [];
    this.len = 0;
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  enqueue(value, priority) {
    const element = new PriorityQueueElement(value, priority);
    let addedFlag = false;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].priority < element.priority) {
        this.arr.splice(i, 0, element);
        addedFlag = true;
        break;
      }
    }

    if (addedFlag === false) this.arr.push(element);
    this.len++;
  }

  dequeue() {
    this.arr.shift();
    this.len--;
    return;
  }

  front() {
    return this.arr[0];
  }

  rear() {
    return this.arr[this.arr.length - 1];
  }
}
