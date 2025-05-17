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
    if (this.root === null) return (this.root = node);
    else return this.insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (!root) return node;
    else if (root.value <= node.value)
      root.right = this.insertNode(root.right, node);
    else root.left = this.insertNode(root.left, node);
    return root;
  }

  search(root, value) {
    if (!root) return false;
    else if (root.value === value) return true;
    else if (root.value < value) return this.search(root.right, value);
    else return this.search(root.left, value);
  }

  min(root) {
    if (!root.left) return root.value;
    else return this.min(root.left);
  }

  max(root) {
    if (!root.right) return root.value;
    else return this.max(root.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;
    else {
      if (root.value < value) root.right = this.deleteNode(root.right, value);
      else if (root.value > value)
        root.left = this.deleteNode(root.left, value);
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
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  bfsTraversal(root) {
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  height(root) {
    if (!root) return -1;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(9);
bst.insert(1);
bst.insert(10);

// bst.bfsTraversal(bst.root);
// bst.inOrder(bst.root);
// bst.delete(5);
// bst.bfsTraversal(bst.root);
console.log(bst.height(bst.root));
