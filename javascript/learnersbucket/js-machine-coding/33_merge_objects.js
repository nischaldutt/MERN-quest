const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: () => {},
    f: {
      g: [],
    },
  },
};

const obj2 = {
  c: {
    s: 2,
  },
  x: 7,
};

// console.log({ ...obj1, ...obj2 });
// console.log(Object.assign({}, obj1, obj2));

function shallowMerge(...args) {
  const result = {};

  function merge(obj) {
    for (let key in obj) {
      result[key] = obj[key];
    }
  }

  for (let obj of args) {
    merge(obj);
  }
  return result;
}

// console.log(shallowMerge(obj1, obj2));

function deepMerge(...args) {
  const result = {};

  function merge(obj) {
    for (let key in obj) {
      if (result[key] === undefined) {
        result[key] = obj[key];
      } else {
        if (typeof obj[key] === "object") {
          result[key] = deepMerge(obj[key], result[key]);
        } else result[key] = obj[key];
      }
    }
  }

  for (let obj of args) {
    merge(obj);
  }
  return result;
}

console.log(deepMerge(obj1, obj2));
