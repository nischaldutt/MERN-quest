// map with reduce
Array.prototype.myMap = function (fxn) {
  return this.reduce((acc, curr, index, arr) => {
    return acc.concat(fxn(curr, index, arr));
  }, []);
};

console.log([2, 3, 4].myMap((curr, index, arr) => curr + 1));

// filter with reduce
Array.prototype.myFilter = function (fxn) {
  return this.reduce((acc, curr, index, arr) => {
    return fxn(curr) ? acc.concat(curr) : acc;
  }, []);
};

console.log([1, 2, 3, 4].myFilter((curr, index, arr) => curr % 2 === 0));

// functions in sequence
function upperCase(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const arr = [upperCase, reverse];

console.log(
  arr.reduce((acc, curr, index, arr) => {
    return curr(acc);
  }, "cristiano ronaldo")
);

// async functions in sequence
function asyncFxn(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`resolving ${i}`), 100 * i);
  });
}

const asyncTasks = [asyncFxn(1), asyncFxn(4), asyncFxn(2), asyncFxn(7)];

console.log(
  asyncTasks.reduce((acc, curr, index, arr) => {
    return acc.then(() => {
      return curr.then((res) => console.log(res));
    });
  }, Promise.resolve())
);
