// https://learnersbucket.com/examples/interview/piping-function-in-javascript-part-2/

function pipe(...fxns) {
  return function (obj) {
    for (let fxn of fxns) {
      obj = fxn(obj);
    }
    return obj;
  };
}

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const val = { salary: 10000 };

const result = pipe(getSalary, addBonus, deductTax)({ salary: 10000 });

console.log(result);
