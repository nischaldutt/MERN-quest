function sum(...args1) {
  let sum = 0;
  if (args1.length === 0) return 0;
  for (let n of args1) sum += n;

  function helper(...args2) {
    for (let n of args2) sum += n;
    if (args2.length === 0) return sum;
    else return helper;
  }

  return helper;
}

const res = sum(1, 2, 3, 4)();
const res2 = sum(1)(2)(3)(4)();
const res3 = sum(1, 2)(3, 4)();
const res4 = sum(1, 2, 3)(4)();
const res5 = sum(1)(2, 3, 4)();
const res6 = sum();

console.log(res, res2, res3, res4, res5, res6);
