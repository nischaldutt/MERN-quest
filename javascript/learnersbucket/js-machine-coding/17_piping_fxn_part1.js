function pipe(obj) {
  const result = {};

  return function (...args) {
    for (let key in obj) {
      if (typeof obj[key] === "function") result[key] = obj[key](...args);
      else if (typeof obj[key] === "object")
        result[key] = pipe(obj[key])(...args);
      else result[key] = obj[key];
    }
    return result;
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

console.log(pipe(test)(1, 1, 1));
