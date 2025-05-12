class HashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }

  hash(key) {
    let sum = 0;
    const len = key.length;
    for (let i = 0; i < len; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.arr[index] === undefined) this.arr[index] = [[key, value]];
    else {
      const sameKeyItem = this.arr[index].find((pair) => pair[0] === key);
      if (sameKeyItem === undefined) this.arr[index].push([key, value]);
      else this.arr[index][1] = value;
    }
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.size || !this.arr[index]) return undefined;
    else return this.arr[index].find((pair) => pair[0] === key);
  }

  remove(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.size || !this.arr[index]) return;
    else {
      const sameKeyItem = this.arr[index].find((pair) => pair[0] === key);
      if (sameKeyItem) {
        const indexToRemove = this.arr[index].indexOf(sameKeyItem);
        this.arr[index].splice(indexToRemove, 1);
      }
    }
  }
}
