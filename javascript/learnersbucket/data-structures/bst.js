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
    if (this.isEmpty()) {
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
    if (value === root.value) return true;
    if (value < root.value) return this.search(root.left, value);
    if (value > root.value) return this.search(root.right, value);
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
      if (value < root.value) root.left = this.deleteNode(root.left, value);
      else if (value > root.value)
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
    return root;
  }

  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root !== null) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  bfs(root) {
    const queue = [];
    queue.push(root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left !== null) queue.push(curr.left);
      if (curr.right !== null) queue.push(curr.right);
    }
  }

  height(root) {
    if (root == null) return 0;
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }
}
