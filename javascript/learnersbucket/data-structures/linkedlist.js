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
    if (this.isEmpty()) {
      this.head = node;
    } else {
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
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new ListNode(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev?.next;
      }
      node.next = prev?.next;
      prev.next = node;
      this.len++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.len) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.len--;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      let next = curr.next;
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
      curr = curr.next;
    }
  }
}
