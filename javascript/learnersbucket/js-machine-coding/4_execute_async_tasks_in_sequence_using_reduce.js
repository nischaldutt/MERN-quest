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

const task6 = () => asyncTask();
const task7 = () => asyncTask();
const task8 = () => asyncTask();
const task9 = () => asyncTask();
const task10 = () => asyncTask();

const asyncOperations = [task6, task7, task8, task9, task10];

function executeAsyncTasksUsingReduce(tasks, callback) {
  const resolvedTasks = [];
  const rejectedTasks = [];
  let count = 0;

  tasks.reduce((acc, curr, index, arr) => {
    return acc.finally(() => {
      return curr()
        .then((res) => resolvedTasks.push(res))
        .catch((err) => rejectedTasks.push(err))
        .finally(() => {
          count++;
          if (count === arr.length) callback(rejectedTasks, resolvedTasks);
        });
    });
  }, Promise.resolve());
}

executeAsyncTasksUsingReduce(asyncOperations, (err, res) =>
  console.log({ err, res })
);
