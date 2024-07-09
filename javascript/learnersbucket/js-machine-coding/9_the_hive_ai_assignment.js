class PromiseSchedule {
  fxnArray = [];
  options = {};

  status = "";
  isPaused = false;
  currentFxnIndex = this.options.startIndex;
  executedFxnIndexes = [];
  unexecutedFxnIndexes = [];
  finalResults = [];

  constructor(asyncFxnsArray, options) {
    this.fxnArray = asyncFxnsArray;
    this.options = options;
    this.initialie();
  }

  initialie() {
    this.status = "progress";
    this.isPaused = false;
    this.currentFxnIndex = this.options.startIndex;
    this.fxnArray.forEach((fxn, i) => {
      this.unexecutedFxnIndexes.push(i);
    });
  }

  async run() {
    const len = this.fxnArray.length;

    for (let i = this.currentFxnIndex; i < len; i++) {
      this.currentFxnIndex = i;
      console.log(this.currentFxnIndex);
      if (this.isPaused === false) {
        try {
          const result = await this.fxnArray[i]();
          this.finalResults.push(result);
          this.executedFxnIndexes.push(i);
          this.unexecutedFxnIndexes.shift();
        } catch (err) {
          console.log(err);
        }
      } else {
        break;
      }
    }

    if (this.executedFxnIndexes.length === len) {
      this.executionCompleted();
    }
  }

  executionCompleted() {
    const { callbacks } = this.options;
    this.status = "completed";

    for (let cb in callbacks) {
      callbacks[cb](this.finalResults);
    }
  }

  async pause() {
    this.isPaused = true;
    this.status = "paused";
  }

  getState() {
    return {
      status: this.status,
      unexecutedFunctionsIndixes: this.unexecutedFxnIndexes,
    };
  }

  async runAllUnexecutedFunctions() {
    const len = this.unexecutedFxnIndexes.length;

    for (let i = this.currentFxnIndex; i < len; i++) {
      try {
        const result = await this.fxnArray[i]();
        this.finalResults.push(result);
        this.executedFxnIndexes.push(i);
        this.unexecutedFxnIndexes.shift();
      } catch (err) {
        console.log({ err });
      }
    }
    this.executionCompleted();
  }
}

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve();
    }, time);
  });
}

const fxnsArray = [
  () => new Promise((resolve, reject) => setTimeout(() => resolve(true), 5000)),
  async () => {
    await delay(5000);
    return true;
  },
];

const options = {
  startIndex: 0,
  callbacks: {
    onCompleted: (results) => {
      console.log(results);
    },
  },
};

async function test() {
  const instance = new PromiseSchedule(fxnsArray, options);
  instance.run();
  await delay(4000);
  instance.pause();
  console.log(instance.getState());
  await instance.runAllUnexecutedFunctions();
  console.log(instance.getState());
}

test();
