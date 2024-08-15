const obj1 = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [{ a: 234 }, [7]],
  },
};

function flatten(obj) {
  const result = {};

  function helper(object1, path) {
    for (let key in object1) {
      let keyString = path ? path + "." + key : key;

      if (Array.isArray(object1[key])) {
        for (let [i, n] of object1[key].entries()) {
          if (typeof n === "object" || Array.isArray(n)) {
            helper(n, keyString + "." + i);
          } else {
            result[keyString + "." + i] = n;
          }
        }
      } else if (typeof object1[key] === "object") {
        helper(object1[key], keyString);
      } else {
        result[keyString] = object1[key];
      }
    }
  }

  helper(obj, "");
  return result;
}

console.log(flatten(obj1));
