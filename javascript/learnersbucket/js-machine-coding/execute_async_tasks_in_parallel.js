function asyncTask(random) {
  // const random = Math.floor(Math.random() * 10);
  console.log({ random });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random < 5) resolve(`resolved ${random}`);
      else reject(`rejected ${random}`);
    }, 100 * random);
  });
}

const asyncOperations = [
  asyncTask(8),
  asyncTask(8),
  asyncTask(7),
  asyncTask(5),
  asyncTask(5),
];

async function executeAsyncTasksInParallel(tasks, callback) {
  const resolvedTasks = [];
  const rejectedTasks = [];
  let count = 0;

  tasks.forEach((task) => {
    task
      .then((res) => resolvedTasks.push(res))
      .catch((err) => rejectedTasks.push(err))
      .finally(() => {
        count++;
        if (count === tasks.length) callback(rejectedTasks, resolvedTasks);
      });
  });
}

executeAsyncTasksInParallel(asyncOperations, (err, res) =>
  console.log({ err, res })
);
