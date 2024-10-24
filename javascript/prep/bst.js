class MyBstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MyBinarySearcgTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new MyBstNode(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }

  search(root, value) {
    if (root === null) return false;
    if (root.value === value) return true;
    if (value < root.value) return this.search(root.left, value);
    if (value > root.right) return this.search(root.right, value);
  }

  min(root) {
    if (root.left === null) return root.value;
    else return this.min(root.left);
  }

  max(root) {
    if (root.right === null) return root.value;
    else return this.max(root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;
    else {
      if (value < root.left) root.left = this.deleteNode(root.left, value);
      else if (value > root.right)
        root.right = this.deleteNode(root.right, value);
      else {
        if (root.left === null && root.right === null) return null;
        else if (root.left === null) return root.right;
        else if (root.right === null) return root.left;
        else {
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
        }
      }
    }
  }

  breadthOrderTraversal(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
      const curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  height(root) {
    if (root === null) return 0;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
}
