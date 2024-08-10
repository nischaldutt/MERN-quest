// function add(...args1) {
//   let sum = 0;
//   for (let n of args1) sum += n;
//   return function (...args2) {
//     add(...args2, sum);
//   };
// }

// console.log(add(1)(2).value() == 3);
// console.log(add(1, 2)(3).value() == 6);
// console.log(add(1)(2)(3).value() == 6);
// console.log(add(1)(2) + 3);

// function curry(callback) {
//   let sum = 0;
//   return function (...args) {
//     sum = callback(...args);
//     return sum;
//   };
// }

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3, 4, 5));
// console.log(curriedSum(1)(2, 3)(4, 5));
// console.log(curriedSum(1)(2)(3)(4));

function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log(sum(1)(2)(3)(4)());
