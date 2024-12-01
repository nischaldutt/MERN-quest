// 1. recursion
function recursiveNinjaTraining(matrix) {
  return recursiveSolve(matrix, matrix.length - 1, matrix[0].length);
}

function recursiveSolve(matrix, day, lastTask) {
  const totalTasks = matrix[0].length;
  let maxPoints = 0;
  if (day === 0) {
    for (let i = 0; i < totalTasks; i++) {
      if (i !== lastTask) {
        maxPoints = Math.max(maxPoints, matrix[day][i]);
      }
    }
  } else {
    for (let i = 0; i < totalTasks; i++) {
      if (i !== lastTask) {
        maxPoints = Math.max(
          maxPoints,
          matrix[day][i] + recursiveSolve(matrix, day - 1, i)
        );
      }
    }
  }
  return maxPoints;
}

// console.log(
//   recursiveNinjaTraining([
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90],
//   ])
// );

// 2. memoised recursion
function memoisedNinjaTraining(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length + 1;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(-1));
  return memoisedSolve(matrix, dp, matrix.length - 1, matrix[0].length);
}

function memoisedSolve(matrix, dp, day, lastTask) {
  if (dp[day][lastTask] !== -1) return dp[day][lastTask];
  const totalTasks = matrix[0].length;
  let maxPoints = 0;
  if (day === 0) {
    for (let i = 0; i < totalTasks; i++) {
      if (i !== lastTask) {
        maxPoints = Math.max(maxPoints, matrix[day][i]);
      }
    }
    dp[day][lastTask] = maxPoints;
  } else {
    for (let i = 0; i < totalTasks; i++) {
      if (i !== lastTask) {
        maxPoints = Math.max(
          maxPoints,
          matrix[day][i] + memoisedSolve(matrix, dp, day - 1, i)
        );
      }
    }
    dp[day][lastTask] = maxPoints;
  }
  return dp[day][lastTask];
}

// console.log(
//   memoisedNinjaTraining([
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90],
//   ])
// );

// 3. iterative
function iterativeNinjaTraining(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));

  for (let task = 0; task < cols; task++) {
    dp[0][task] = matrix[0][task];
  }

  for (let day = 1; day < rows; day++) {
    for (let task = 0; task < cols; task++) {
      let maxPoints = 0;
      for (let last = 0; last < cols; last++) {
        if (last !== task)
          maxPoints = Math.max(
            maxPoints,
            matrix[day][task] + dp[day - 1][last]
          );
      }
      dp[day][task] = maxPoints;
    }
  }
  return Math.max(...dp[rows - 1]);
}

// console.log(
//   iterativeNinjaTraining([
//     [10, 40, 70],
//     [20, 50, 80],
//     [30, 60, 90],
//   ])
// );

// 4. space-optimised iterative
function optimisedNinjaTraining(matrix) {
  const totalTasks = matrix[0].length;
  let prev = new Array(totalTasks).fill(0);
  for (let task = 0; task < totalTasks; task++) prev[task] = matrix[0][task];

  for (let day = 1; day < matrix.length; day++) {
    let curr = new Array(totalTasks).fill(0);
    for (let task = 0; task < totalTasks; task++) {
      let maxPoints = 0;
      for (let last = 0; last < totalTasks; last++) {
        if (last !== task) {
          maxPoints = Math.max(maxPoints, matrix[day][task] + prev[last]);
        }
        curr[task] = maxPoints;
      }
    }
    prev = curr;
  }
  return prev[totalTasks - 1];
}

console.log(
  optimisedNinjaTraining([
    [10, 40, 70],
    [20, 50, 80],
    [30, 60, 90],
  ])
);
