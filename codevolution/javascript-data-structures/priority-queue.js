class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PrirityQueue {
  constructor() {
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
    const node = new PriorityQueueNode(value, priority);
    let flag = false;

    for (let i = 0; i < this.len; i++)
      if (this.arr[i].priority < node.priority) {
        this.arr.splice(i, 0, node);
        flag = true;
        break;
      }
    if (flag === false) this.arr.push(node);
    this.len++;
  }

  dequeue() {
    if (this.isEmpty()) return;
    else {
      this.arr.shift();
      this.len--;
      return;
    }
  }

  front() {
    if (this.isEmpty()) return;
    else return this.arr[0];
  }

  rear() {
    if (this.isEmpty()) return;
    else return this.arr[this.size() - 1];
  }
}
