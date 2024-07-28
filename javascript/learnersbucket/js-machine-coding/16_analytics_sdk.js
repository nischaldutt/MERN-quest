// https://leetcode.com/discuss/interview-question/1857338/swiggy-phone-design-analytics-sdk-sde2

// https://learnersbucket.com/examples/interview/create-analytics-sdk-in-javascript/

class SDK {
  constructor() {
    this.queue = [];
    this.count = 1;
  }

  logEvent(event) {
    this.queue.push(event);
  }

  delay(e) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (this.count % 5 === 0) reject(`Failed to send ${e}`);
        else resolve(`Analytics sent ${e}`);
      }, 1000)
    );
  }

  async send() {
    if (this.queue.length === 0) return;

    const current = this.queue.shift();
    try {
      const res = await this.delay(current);
      console.log(res);

      this.count++;
    } catch (err) {
      console.log("------");
      console.log(err);
      console.log(`Retrying sending ${current}`);
      console.log("------");
      this.queue.unshift(current);
      this.count = 1;
    } finally {
      this.send();
    }
  }
}

const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");

sdk.send();
