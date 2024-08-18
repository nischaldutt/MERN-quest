class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const obj1 = new Singleton();
const obj2 = new Singleton();

console.log(obj1 === obj2);
