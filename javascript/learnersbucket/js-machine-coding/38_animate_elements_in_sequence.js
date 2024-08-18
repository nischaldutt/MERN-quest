// https://leetcode.com/discuss/interview-experience/2569900/Navi-or-UI-Engineer-2-or-Bangalore-or-July-2022-Offer

const root = document.getElementById("root");
const button = document.getElementById("btn");
let count = 0;

function create(delay) {
  const bar = document.createElement("div");
  bar.classList.add("progressBar");
  bar.style.transition = `width ${delay}s ease`;
  root?.appendChild(bar);

  setTimeout(() => {
    bar.classList.add("loading");
  }, 0);

  bar.addEventListener("transitionend", () => {
    console.log("hey");
    if (count > 1) {
      count--;
      create(3);
    }
  });

  bar.removeEventListener("transitionend", () => {});
}

function add() {
  if (count === 0) create(3);
  count++;
}

button?.addEventListener("click", add);
