class MyHashTable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.arr[index];
    if (!bucket) this.arr[index] = [[key, value]];
    else bucket.push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.arr[length]) return -1;
    const values = this.arr[index];
    if (values.length === 1) return values[0];
    else {
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] === key) {
          return values[i][1];
        }
      }
    }
  }

  remove(key) {
    const index = this.hash(key);
    const values = this.arr[index];
    if (values.length === 1) return values[0];
    else {
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] === key) {
          values.splice(i, 1);
        }
      }
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.arr[i]) console.log(this.arr[i]);
    }
  }
}

const test = new MyHashTable(3);
test.set("abc", 1);
test.set("bca", 1);
test.set("cba", 1);
console.log(test.display());
test.remove("bca");
console.log(test.display());
