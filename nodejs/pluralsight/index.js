const printNumber = (from, to) => {
  const timerId = setTimeout(function run() {
    if (from > to) {
      clearTimeout(timerId);
    } else {
      console.log(from);
      from++;
      setTimeout(run, 1000);
    }
  }, 1000);
};
printNumber(1, 4);

const printNumber = (from, to) => {
  const timerId = setInterval(() => {
    if (from > to) {
      clearInterval(timerId);
    } else {
      console.log(from);
      from++;
    }
  }, 1000);
};
printNumber(1, 4);

const hello = (time) => {
  console.log(`Hello after ${time} seconds`);
};
setTimeout(hello, 4 * 1000, 4);
setTimeout(hello, 8 * 1000, 8);

let count = 0;
const hello = () => {
  if (count === 5) clearInterval(timerId);
  else {
    count++;
    console.log("Hello World");
  }
};
const timerId = setInterval(hello, 1000);

// challenge 1
// nested setTimeout
const hello = (time) => {
  const timerId = setTimeout(function run() {
    console.log(`hello ${time}`);
    time++;
    setTimeout(run, time * 1000);
  }, time * 1000);
};
hello(1);

// challenge 2
// using setInterval
const hello = (time) => {
  console.log("calling with time ==> " + time);
  let count = 0;
  const timerId = setInterval(() => {
    if (count === 5) {
      count = 0;
      clearInterval(timerId);
      hello(time + 1);
    } else {
      console.log(`hello ${time}`);
      count++;
    }
  }, time * 1000);
};
hello(1);
