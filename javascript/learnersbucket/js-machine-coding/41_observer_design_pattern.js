class Events {
  constructor() {
    this.subscriptions = {};
  }

  subscribe = function (key, callback) {
    if (this.subscriptions.hasOwnProperty(key)) {
      this.subscriptions[key] = [...this.subscriptions[key], callback];
    } else {
      this.subscriptions[key] = [callback];
    }

    return {
      removeSubscription: function () {
        console.log(this.subscriptions);
        const filtered = this.subscriptions[key].filter((x) => x !== callback);
        this.subscriptions[key] = filtered;
      },
    };
  };

  publish = function (key, data) {
    this.subscriptions[key].forEach((callback) => {
      callback(data);
    });
  };

  publishAll = function () {};
}

const events = new Events();

const subscription = events.subscribe("new-user", (payload) =>
  console.log("subscription 1", payload)
);

events.publish("new-user", "nischal");

const subscription2 = events.subscribe("new-user", (payload) =>
  console.log("subscription 2", payload)
);

events.publish("new-user", "nischal2");

subscription.removeSubscription();
// events.publish("new-user", "nischal3");
