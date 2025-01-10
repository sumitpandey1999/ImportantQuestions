function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const heandleSearch = () => {
  console.log("I am Searching");
};

const debounceSearch = debounce(heandleSearch, 200);

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", debounceSearch);
