function timer(initial, step) {
  let value = initial;
  let id = 0;

  function start() {
    id = setInterval(() => {
      console.log(value);
      value += step;
    }, 1000);
  }

  function stop() {
    clearInterval(id);
  }
  return { start, stop };
}

const timerObj = timer(10, 10);

timerObj.start();

setTimeout(() => {
  timerObj.stop();
}, 6000);
