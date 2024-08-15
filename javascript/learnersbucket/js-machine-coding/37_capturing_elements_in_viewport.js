const blocks = document.querySelectorAll(".blocks");

function isInViewport(block) {
  const dimensions = block.getBoundingClientRect();
  const winHeight = window.innerHeight || document.documentElement.clientHeight;
  const winWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    dimensions.top >= 0 &&
    dimensions.left >= 0 &&
    dimensions.bottom <= winHeight &&
    dimensions.right <= winWidth
  );
}

function getBlocks() {
  const result = [];
  for (let block of blocks) {
    if (isInViewport(block)) result.push(block.textContent);
  }
  console.log(result);
}

function debounce(callback, delay) {
  const context = this;
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      callback.call(context, ...args);
    }, delay);
  };
}

const debouncedBlocks = debounce(getBlocks, 1000);
window.addEventListener("scroll", debouncedBlocks);
