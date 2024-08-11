Array.prototype.listeners = {};

Array.prototype.addListener = function (eventName, callback) {
  if (this.listeners[eventName] === undefined) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callback);
};

Array.prototype.pushWithEvent = function (e, values) {
  this.push(...values);
  this.triggerEvent(e, values);
};

Array.prototype.popWithEvent = function (e, values) {
  this.triggerEvent(e, this.pop());
};

Array.prototype.triggerEvent = function (e, values) {
  for (let callback of this.listeners[e]) {
    callback(e, values, this);
  }
};

const arr = [];

arr.addListener("add", (eventName, items, array) => {
  console.log("items were added", items);
});

arr.addListener("remove", (eventName, item, array) => {
  console.log(item, " was removed");
});

arr.pushWithEvent("add", [4, 5]);
arr.popWithEvent("remove");
