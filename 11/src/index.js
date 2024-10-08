const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorsSize = colors.length;

function changeBackground() {
  const fromIndex = Math.floor(Math.random() * colorsSize);
  const toIndex = Math.floor(Math.random() * colorsSize);

  document.body.style.backgroundImage = `linear-gradient(0.25turn, ${colors[fromIndex]}, ${colors[toIndex]})`;
}

const btn = document.querySelector("button");

changeBackground();
btn.addEventListener("click", changeBackground);
