class MyListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }

  prepend(value) {
    const node = new MyListNode(value);
    node.next = this.head;
    this.head = node;
    this.len++;
  }

  append(value) {
    const node = new MyListNode(value);
    node.next = null;

    if (this.isEmpty()) this.head = node;
    else {
      let curr = this.head;
      while (curr?.next !== null) {
        curr = curr?.next;
      }
      curr.next = node;
    }
    this.len++;
  }

  insert(value, index) {
    if (index < 0 || index > this.len) return;
    else if (index === 0) return this.prepend(value);
    else if (index === this.len) return this.append(value);
    else {
      const node = new MyListNode(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr?.next;
      }
      node.next = curr?.next;
      curr.next = node;
      this.len++;
    }
  }

  remove(index) {
    if (this.isEmpty()) return;
    if (index < 0 || index > this.len) return;
    if (index === 0) this.head = null;
    else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr?.next;
      }
      curr.next = curr?.next.next;
    }
    this.len--;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      let next = curr?.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.value);
      curr = curr?.next;
    }
  }
}
