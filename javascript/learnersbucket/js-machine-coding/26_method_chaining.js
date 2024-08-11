// https://leetcode.com/discuss/interview-experience/2569900/Navi-or-UI-Engineer-2-or-Bangalore-or-July-2022-Offer

class ComputeAmount {
  constructor() {
    this.result = 0;
  }

  thousand = function (val) {
    this.result += val * 1000;
    return this;
  };

  lacs = function (val) {
    this.result += val * 100000;
    return this;
  };

  crore = function (val) {
    this.result += val * 10000000;
    return this;
  };

  hundred = function (val) {
    this.result += val * Math.pow(10, 2);
    return this;
  };

  ten = function (val) {
    this.result += val * 10;
    return this;
  };

  unit = function (val) {
    this.result += val;
    return this;
  };

  value = function () {
    return this.result;
  };
}

const computeAmount = new ComputeAmount();
const amount = computeAmount
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .value();
console.log(amount);
