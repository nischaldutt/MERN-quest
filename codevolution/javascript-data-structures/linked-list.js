class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
    const node = new ListNode(value);
    node.next = this.head;
    this.head = node;
    this.len++;
  }

  append(value) {
    const node = new ListNode(value);
    if (this.isEmpty()) this.head = node;
    else {
      let curr = this.head;
      while (curr?.next !== null) curr = curr?.next;
      curr.next = node;
    }
    this.len++;
  }

  insert(value, index) {
    if (index < 0 || index >= this.len) return;
    if (this.isEmpty()) this.prepend(value);
    else {
      const node = new ListNode(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) curr = curr?.next;
      node.next = curr?.next;
      curr.next = node;
      this.len++;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.len || this.isEmpty()) return;
    if (index === 0) this.head = this.head.next;
    else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) curr = curr?.next;
      curr.next = curr?.next?.next;
    }
    this.len--;
  }

  reverse() {
    if (this.isEmpty()) return;
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      let temp = curr?.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) return;
    let curr = this.head;
    while (curr !== null) {
      console.log(curr?.value);
      curr = curr?.next;
    }
  }
}
