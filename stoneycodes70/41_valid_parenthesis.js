var isValid = function (s) {
  const stack = [];
  const len = s.length;
  if (len % 2 === 1) return false;

  for (let c of s) {
    if (c === "(" || c === "[" || c === "{") stack.push(c);
    else if (c === ")") {
      if (stack[stack.length - 1] === "(") stack.pop();
      else return false;
    } else if (c === "]") {
      if (stack[stack.length - 1] === "[") stack.pop();
      else return false;
    } else if (c === "}") {
      if (stack[stack.length - 1] === "{") stack.pop();
      else return false;
    }
  }
  if (stack.length === 0) return true;
  else return false;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
