function jsonToHtml(json) {
  const fragment = document.createDocumentFragment();
  if (!Array.isArray(json)) json = [json];

  for (let obj of json) {
    const element = document.createElement(obj.type);

    if (obj.props !== undefined) {
      for (let key in obj.props) {
        element.setAttribute(key, obj.props[key]);
      }
    }

    if (Array.isArray(obj.children)) {
      for (let child of obj.children) {
        element.appendChild(jsonToHtml(child));
      }
    } else element.innerText = obj.children;

    fragment.appendChild(element);
  }
  return fragment;
}

const json = [
  {
    type: "div",
    props: { id: "hello", class: "foo" },
    children: [
      { type: "h1", children: "HELLO" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar" }, children: "World" },
        ],
      },
    ],
  },
];

console.log(jsonToHtml(json));
