console.clear();

 import getRandomColor from './utils/randomColor.js'

const root = document.getElementById("root");

const circle = document.createElement("div");
circle.classList.add("circle");
circle.addEventListener("click", () => {
  circle.style.backgroundColor = getRandomColor();
});

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getRandomColor();
});

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = "#ccc";
// });

root.append(circle, square, pentagon);

