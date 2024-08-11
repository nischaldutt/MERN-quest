class LocalStorage {
  setItem = function (key, value, maxAge = 10 * 1000) {
    const obj = {
      data: value,
      expireTime: Date.now() + maxAge,
    };
    window.localStorage.setItem(key, JSON.stringify(obj));
  };

  getItem = function (key) {
    const obj = JSON.parse(window.localStorage.getItem(key));
    if (obj !== undefined) {
      if (obj.expireTime <= Date.now()) {
        window.localStorage.removeItem(key);
        return null;
      } else return obj.data;
    }
    return null;
  };
}

const myLocalStorage = new LocalStorage();
myLocalStorage.setItem("foo", "bar", 1000);

setTimeout(() => {
  console.log(myLocalStorage.getItem("foo"));
}, 1500);
