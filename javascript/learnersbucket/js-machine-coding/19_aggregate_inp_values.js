function aggregateValues(parentId) {
  const parent = document.getElementById(parentId);
  const inputs = parent?.querySelectorAll("input[type='text']");

  return Array.from(inputs).reduce((acc, curr) => {
    const { name, value } = curr;
    const names = name.split(".");
    let temp = acc;

    names.forEach((x, index) => {
      if (temp[x] === undefined) temp[x] = {};
      if (index === names.length - 1) temp[x] = value;
      temp = temp[x];
    });
    return acc;
  }, {});
}

console.log(aggregateValues("parent"));
