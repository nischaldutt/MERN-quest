function myGetElementByClassName(className) {
  const root = document.body;
  console.log(root);

  function search(node) {
    let result = [];
    if (node.classList.contains(className)) {
      result.push(node);
    }

    for (let child of node.children) {
      let res = search(child);
      result = result.concat(res);
    }
    return result;
  }

  return search(root);
}

console.log(myGetElementByClassName("a"));
