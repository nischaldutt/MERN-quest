function myFunction(a, b, c) {
  console.log({ a, b, c });
}

// debounce
function debounce(fun, delay, ...args1) {
  const context = this;
  let timerId;
  console.log({ timerId });
  return function (...args2) {
    console.log({ timerId });
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fun.call(context, ...args1, ...args2);
    }, delay);
  };
}

// const foo = debounce(myFunction, 1000, 1, 2);
// document.getElementById("inp")?.addEventListener("keyup", () => foo(3));

// throttle
function throttle(fun, delay) {
  const context = this;
  let flag = true;
  return function (...args) {
    if (flag) {
      fun.call(context, ...args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

// const foo = throttle(myFunction, 1000);
// document.addEventListener("keyup", () => foo(1, 2, 3));
