class AvlTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AvlTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  height(node) {
    if (!node) return 0;
    return node.height;
  }

  getBalanceFactor(node) {
    if (!node) return 0;
    return this.height(node.left) - this.height(node.right);
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  rightRotate(x) {
    const y = x.left;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  insert(value) {
    return (this.root = this.insertNode(this.root, value));
  }

  insertNode(root, value) {
    if (!root) return (this.root = new AvlTreeNode(value));
    if (value < root.value) root.left = this.insertNode(root.left, value);
    else if (value > root.value)
      root.right = this.insertNode(root.right, value);
    else return root;

    this.updateHeight(root);
    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && root.left.value > value)
      return this.rightRotate(root);
    if (balanceFactor < -1 && root.right.value < value)
      return this.leftRotate(root);
    if (balanceFactor > 1 && root.left.value < value) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }
    if (balanceFactor < -1 && root.right.value > value) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }
    return root;
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
    return (this.root = this.deleteNode(this.root, value));
  }

  deleteNode(root, value) {
    if (!root) return null;
    else {
      if (value < root.value) root.left = this.deleteNode(root.left, value);
      else if (value > root.value)
        root.right = this.deleteNode(root.right, value);
      else {
        if (!root.left && !root.right) return null;
        else if (!root.left) return root.right;
        else if (!root.right) return root.left;
        else {
          root.value = this.min(root.right);
          root.right = this.deleteNode(root.right, root.value);
        }
      }
    }
    if (!root) return null;
    this.updateHeight(root);
    const balanceFactor = this.getBalanceFactor(root);

    if (balanceFactor > 1 && this.getBalanceFactor(root.left) >= 0)
      return this.rightRotate(root);
    else if (balanceFactor > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    } else if (balanceFactor < -1 && this.getBalanceFactor(root.right) <= 0)
      return this.leftRotate(root);
    else if (balanceFactor < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }
    return root;
  }

  preOrder(root) {
    if (!root) return;
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
}

const avlTree = new AvlTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);

avlTree.preOrder(avlTree.root);

console.log("===");

avlTree.delete(50);
avlTree.preOrder(avlTree.root);
