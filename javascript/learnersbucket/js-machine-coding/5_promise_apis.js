const task1 = function () {
  return new Promise((resolve, reject) => {
    return resolve("resolved task1");
  });
};

const task2 = function () {
  return new Promise((resolve, reject) => {
    return resolve("resolved task2");
  });
};

const task3 = function () {
  return new Promise((resolve, reject) => {
    return resolve("resolved task3");
  });
};

// ********************************************
// promise.all
Promise.all([task1(), task2(), task3()])
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));

// ********************************************

// promise.allSettled
Promise.allSettled([task1(), task2(), task3()])
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));

async function test() {
  try {
    const t = await Promise.allSettled([task1(), task2(), task3()]);
    console.log({ t });
  } catch (err) {
    console.log({ err });
  }
}
test();

// ********************************************
// promise.any
Promise.any([task1(), task2(), task3()])
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));

// ********************************************
// promise.race
Promise.race([task1(), task2(), task3()])
  .then((result) => console.log({ result }))
  .catch((err) => console.log({ err }));
