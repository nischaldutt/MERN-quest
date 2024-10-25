class Stack {
  constructor() {
    this.obj = {};
    this.len = -1;
  }

  push(value) {
    this.obj[this.len] = value;
    this.len++;
  }

  pop() {
    const last = this.obj[this.len - 1];
    delete this.obj[this.len - 1];
    this.len--;
    return last;
  }

  top() {
    return this.obj[this.len - 1];
  }

  isEmpty() {
    return this.len === 0;
  }

  size() {
    return this.len;
  }
}

function nearestGreatestToRight(arr) {
  const stack = new Stack();
  const len = arr.length;
  const result = [];

  for (let i = len - 1; i >= 0; i--) {
    if (stack.isEmpty()) result.push(-1);
    else {
      if (!stack.isEmpty() && stack.top() > arr[i]) {
        result.push(stack.top());
      } else if (!stack.isEmpty() && stack.top() <= arr[i]) {
        while (!stack.isEmpty() && stack.top() <= arr[i]) stack.pop();
        if (stack.isEmpty()) result.push(-1);
        else result.push(stack.top());
      }
    }
    stack.push(arr[i]);
  }

  return result.reverse();
}
