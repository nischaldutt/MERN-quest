var MinStack = function () {
  this.arr = [];
};

MinStack.prototype.push = function (val) {
  if (this.arr.length === 0) this.arr.push([val, val]);
  else {
    let min = Math.min(this.getMin(), val);
    this.arr.push([val, min]);
  }
};

MinStack.prototype.pop = function () {
  this.arr.pop();
};

MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1][0];
};

MinStack.prototype.getMin = function () {
  return this.arr[this.arr.length - 1][1];
};
