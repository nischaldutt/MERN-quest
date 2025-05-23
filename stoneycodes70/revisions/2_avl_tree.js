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
    return node.height;
  }

  getBalanceFactor(node) {
    return this.height(node.right) - this.height(node.left);
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

  insert(root, value) {
    if (!root) return new AvlTreeNode(value);
    if (value < root.value) root.left = this.insert(root.left, value);
    else if (value > root.value) root.right = this.insert(root.right, value);
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
}
