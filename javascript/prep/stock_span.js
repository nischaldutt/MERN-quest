class Stack {
  constructor() {
    this.obj = {};
    this.len = 0;
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

function stockSpan(arr) {
  const stack = new Stack();
  const len = arr.len;
  const result = [];

  for (let i = 0; i < len; i++) {
    if (stack.isEmpty()) result.push(-1);
    else {
      if (!stack.isEmpty() && stack.top().value > arr[i])
        result.push(stack.top().key);
      else if (!stack.isEmpty() && stack.top().value <= arr[i]) {
        while (!stack.isEmpty() && stack.top().value <= arr[i]) stack.pop();
        if (stack.isEmpty()) result.push(-1);
        else result.push(stack.top().value);
      }
    }
    stack.push({ index: i, value: arr[i] });
  }

  const response = [];
  for (let i = 0; i < len; i++) {
    response[i] = i - result[i];
  }
  return response;
}
