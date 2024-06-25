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

const task1 = () => asyncTask();
const task2 = () => asyncTask();
const task3 = () => asyncTask();
const task4 = () => asyncTask();
const task5 = () => asyncTask();

const asyncOps = [task1, task2, task3, task4, task5];

async function executeAsyncTasksInSequence(tasks, callback) {
  const resolvedTasks = [];
  const rejectedTasks = [];

  for (let task of tasks) {
    console.log({ resolvedTasks, rejectedTasks });
    try {
      const response = await task();
      resolvedTasks.push(response);
    } catch (err) {
      rejectedTasks.push(err);
    }
  }
  callback(rejectedTasks, resolvedTasks);
}

executeAsyncTasksInSequence(asyncOps, (err, res) => console.log({ err, res }));
