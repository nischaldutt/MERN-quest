var evalRPN = function (tokens) {
  const stack = [];
  for (let x of tokens) {
    if (["+", "-", "*", "/"].includes(x)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (x) {
        case "+": {
          stack.push(a + b);
          break;
        }
        case "-": {
          stack.push(a - b);
          break;
        }
        case "*": {
          stack.push(a * b);
          break;
        }
        case "/": {
          stack.push(Math.trunc(a / b));
          break;
        }
      }
    } else stack.push(parseInt(x));
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
