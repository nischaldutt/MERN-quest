function set(obj, path, value) {
  if (typeof path === "string") {
    path = path.replace("[", ".").replace("]", "").split(".");
  }
  helper(obj, path, value);
}

function helper(obj, path, value) {
  const [curr, ...rest] = path;
  if (rest.length > 0) {
    if (obj[curr] === undefined) {
      if (typeof rest[0] === "number") obj[curr] = [];
      else obj[curr] = {};
    }

    if (typeof obj[curr] !== "object") {
      if (typeof rest[0] === "number") helper([], rest, value);
      else helper({}, rest, value);
    } else {
      obj[curr] = helper(obj[curr], rest, value);
    }
  } else obj[curr] = value;

  return obj;
}

const object = { a: [{ b: { c: 3 } }] };

set(object, "a[0].b.c", 4);
console.log(object.a[0].b.c);
// 4

set(object, ["x", "0", "y", "z"], 5);
console.log(object.x[0].y.z);
// 5
