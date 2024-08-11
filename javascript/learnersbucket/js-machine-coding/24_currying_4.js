function curry(callback) {
  function helper(...args) {
    if (args.length >= callback.length) {
      return callback(...args);
    } else {
      function helper2(...args2) {
        return helper(...args, ...args2);
      }
      return helper2;
    }
  }
  return helper;
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4, 5));
console.log(curriedSum(1)(2)(3)(4));
