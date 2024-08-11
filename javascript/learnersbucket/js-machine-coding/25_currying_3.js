function add(...args) {
  let arr = [...args];

  function helper(...args2) {
    arr = [...arr, ...args2];
    return helper;
  }

  helper.valueOf = function () {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  helper.value = helper.valueOf;

  return helper;
}

console.log(add(1)(2).value() == 3);
console.log(add(1, 2)(3).value() == 6);
console.log(add(1)(2)(3).value() == 6);
console.log(add(1)(2) + 3);
