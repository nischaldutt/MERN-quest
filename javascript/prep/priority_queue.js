class MyPriorityQueueElement {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MyPriorityQueue {
  contructor() {
    this.arr = [];
    this.len = 0;
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }

  enqueue(value, priority) {
    const node = new MyPriorityQueueElement(value, priority);
    let addedFlag = false;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].priority < node.priority) {
        this.arr?.splice(i, 0, node);
        addedFlag = true;
        break;
      }
    }

    if (addedFlag === false) this.arr?.push(node);
    this.len++;
  }

  dequeu() {
    this.arr?.shift();
    this.len--;
    return;
  }

  front() {
    return this.arr[0];
  }

  rear() {
    return this.arr[this.len - 1];
  }
}
