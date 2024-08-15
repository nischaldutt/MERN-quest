const input = document.getElementById("inp");

function test(a) {
  console.log("hi", a);
}

function debounce(callback, delay, ...args) {
  const context = this;
  let id;
  return function (...args2) {
    clearTimeout(id);
    id = setTimeout(() => {
      callback.call(context, ...args, ...args2);
    }, delay);
  };
}

// const debounced = debounce(test, 1000, "nischal");
// input?.addEventListener("keyup", debounced);

function throttle(callback, delay, ...args) {
  const context = this;
  let flag = true;
  return function (...args2) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        callback.call(context, ...args, ...args2);
        flag = true;
      }, delay);
    }
  };
}

const throttled = throttle(test, 1000);
input?.addEventListener("keyup", throttled);
