// https://leetcode.com/discuss/interview-experience/1566225/atlassian-p5-bangalore-4th-oct-19th-oct-p4-offer

// https://learnersbucket.com/examples/interview/circuit-breaker-in-javascript/

function myFunction() {
  let count = 0;
  return function () {
    count++;
    if (count < 4) throw "error";
    else console.log("success");
  };
}

function circuitBreaker(callback, failCount, timeThreshold) {
  let fails = 0;
  let timeSinceLastFailure = 0;
  let flag = true;

  return function (...args) {
    if (flag === false) {
      if (Date.now() - timeSinceLastFailure <= timeThreshold) {
        console.log("unavailable");
        return;
      } else {
        fails = 0;
        timeSinceLastFailure = 0;
        flag = true;
      }
    }

    try {
      const res = callback(...args);
      fails = 0;
      timeSinceLastFailure = 0;
      return res;
    } catch (e) {
      fails++;
      timeSinceLastFailure = Date.now();
      if (fails >= failCount) flag = false;
      console.log("error");
    }
  };
}

const test = circuitBreaker(myFunction(), 3, 1000);
test();
test();
test();

test();
test();
test();
test();
test();
test();

setTimeout(() => test(), 1000);
