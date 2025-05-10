class BstNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new BstNode(value);
    if (this.isEmpty()) this.root = node;
    else this.insertNode(this.root, value);
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right === null) root.right === node;
      else this.insertNode(root.right, node);
    }
  }

  search(root, value) {
    if (this.isEmpty() || root === null) return false;
    if (root.value === value) return true;
    else if (value < root.value) this.search(root.left, value);
    else this.search(root.right, value);
  }

  min(root) {
    if (root.left) return this.min(root.left);
    else return root.value;
  }

  max(root) {
    if (root.right) return this.max(root.right);
    else return root.value;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;
    else {
      if (value < root.value) root.left = this.deleteNode(root.left, value);
      else if (value > root.value)
        root.right = this.deleteNode(root.right, value);
      else {
        if (root.left === null && root.right === null) return null;
        else if (root.left) return root.left;
        else if (root.right) return root.right;
        else {
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
        }
      }
    }
    return root;
  }

  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      console.log(root.right);
    }
  }

  preOrder(root) {
    if (root !== null) {
      console.log(root.value);
      this.inOrder(root.left);
      console.log(root.right);
    }
  }

  postOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.right);
      console.log(root.value);
    }
  }

  bfs(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }

  height(root) {
    if (root === null) return 0;
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }
}
