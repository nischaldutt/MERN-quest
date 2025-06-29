var MyStack = function () {
  this.queue = [];
};

MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

MyStack.prototype.pop = function () {
  let len = this.queue.length;
  while (len - 1) {
    const x = this.queue.shift();
    this.queue.push(x);
    len--;
  }
  return this.queue.shift();
};

MyStack.prototype.top = function () {
  return this.queue[this.queue.length - 1];
};

MyStack.prototype.empty = function () {
  return this.queue.length === 0;
};
