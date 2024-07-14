// problem link: https://learnersbucket.com/examples/interview/implement-an-in-memory-search-engine/

class InMemorySearch {
  obj = {};

  addDocuments(namespace, ...values) {
    for (let value of values) {
      if (this.obj[namespace] === undefined) this.obj[namespace] = [value];
      else this.obj[namespace].push(value);
    }
  }

  search(namespace, fxn, { key, asc }) {
    if (this.obj[namespace] === undefined) return [];

    const result = this.obj[namespace].filter(fxn);
    asc
      ? result.sort((a, b) => a[key] - b[key])
      : result.sort((a, b) => b[key] - a[key]);
    return result;
  }
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);
