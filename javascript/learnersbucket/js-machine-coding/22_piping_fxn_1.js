function myFxn(obj) {
  return function (...args) {
    for (let key in obj) {
      if (typeof obj[key] === "function") {
        obj[key] = obj[key](...args);
      } else if (typeof obj[key] === "object") {
        obj[key] = myFxn(obj[key])(...args);
      } else obj[key] = obj[key];
    }
    return obj;
  };
}

const test = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

console.log(myFxn(test)(1, 1, 1));
