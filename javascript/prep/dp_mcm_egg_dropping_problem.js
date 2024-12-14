// 1. recursive
function recursiveEggDropping(eggs, floors) {
  if (floors === 0 || floors === 1) return floors;
  if (eggs === 1) return floors;
  let result = Infinity;
  for (let k = 1; k <= floors; k++) {
    let temp =
      1 +
      Math.max(
        recursiveEggDropping(eggs - 1, k - 1),
        recursiveEggDropping(eggs, floors - k)
      );
    result = Math.min(result, temp);
  }
  return result;
}

// console.log(recursiveEggDropping(2, 10));

// 2. memoised recursive
function memoisedEggDropping(eggs, floors) {
  const t = Array.from({ length: eggs + 1 }, () =>
    new Array(floors + 1).fill(-1)
  );
  return solve(t, eggs, floors);
}

function solve(t, e, f) {
  if (f === 0 || f === 1) return (t[e][f] = f);
  if (e === 1) return (t[e][f] = f);
  if (t[e][f] !== -1) return t[e][f];
  let result = Infinity;

  for (let k = 1; k <= f; k++) {
    let temp = 1 + Math.max(solve(t, e - 1, k - 1), solve(t, e, f - k));
    result = Math.min(result, temp);
  }
  return (t[e][f] = result);
}

// console.log(memoisedEggDropping(2, 100));

// 3. iterative
function iterativeEggDropping(eggs, floors) {
  const dp = Array.from({ length: eggs + 1 }, () =>
    new Array(floors + 1).fill(-1)
  );

  for (let i = 0; i <= eggs; i++) {
    for (let j = 0; j <= floors; j++) {
      if (j === 0 || j === 1) dp[i][j] = j;
      if (i === 1) dp[i][j] = j;
    }
  }

  for (let i = 2; i <= eggs; i++) {
    for (let j = 2; j <= floors; j++) {
      let result = Infinity;
      for (let k = 1; k <= j; k++) {
        let temp = 1 + Math.max(dp[i - 1][k - 1], dp[i][j - k]);
        result = Math.min(result, temp);
      }
      dp[i][j] = result;
    }
  }
  return dp[eggs][floors];
}

console.log(iterativeEggDropping(2, 100));
