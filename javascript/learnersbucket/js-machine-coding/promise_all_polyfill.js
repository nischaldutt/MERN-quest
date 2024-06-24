function asyncTask() {
  const random = Math.floor(Math.random() * 10);
  console.log({ random });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random < 5) resolve(`resolved ${random}`);
      else reject(`rejected ${random}`);
    }, 1000 * random);
  });
}

const task1 = asyncTask();
const task2 = asyncTask();
const task3 = asyncTask();
const task4 = asyncTask();
const task5 = asyncTask();

const asyncOps = [task1, task2, task3, task4, task5];

// using reduce to perform async tasks in sequence
function myPromiseAll(asyncTasks, callback) {
  const resolvedTasks = [];
  const rejectedTasks = [];
  let count = 0;

  return asyncTasks.reduce((acc, curr, index, arr) => {
    // irrespective of the prev promise, we process the curr promise*
    return acc.finally(() => {
      return curr
        .then((res) => resolvedTasks.push(res))
        .catch((err) => rejectedTasks.push(err))
        .finally(() => {
          count++;
          if (count === arr.length) callback(rejectedTasks, resolvedTasks);
        });
    });
  }, Promise.resolve());
}

myPromiseAll(asyncOps, (err, res) => console.log({ err, res }));
