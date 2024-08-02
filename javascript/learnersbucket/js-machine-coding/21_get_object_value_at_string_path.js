function get(obj, path) {
  if (typeof path === "string") {
    path = path.replace("[", ".").replace("]", "").split(".");
  }
  return helper(obj, path);
}

function helper(obj, path) {
  const [curr, ...rest] = path;
  if (rest.length === 0) return obj[curr];
  else {
    if (typeof rest[0] === "number")
      return helper(obj[curr[rest[0]]], path.slice(2));
    else return helper(obj[curr], path.slice(1));
  }
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, ["a", "b", "c", "2"]));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, "a.c"));
