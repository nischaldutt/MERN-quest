function throttle(arr, count = arr.length, callback, delay = 2000) {
  let timerId;
  let lastRan;
  let queue = [...arr];

  return function () {
    if (lastRan === undefined) {
      callback(queue.splice(0, count));
      lastRan = Date.now();
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        if (Date.now() - lastRan >= delay) {
          callback(queue.splice(0, count));
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

const foo = throttle(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  2,
  (arr) => console.log(arr),
  1000
);

document.addEventListener("keyup", foo);
