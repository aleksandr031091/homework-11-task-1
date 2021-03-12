import { colors } from "./colors.js";

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

refs.start.addEventListener("click", addColorStart);
refs.stop.addEventListener("click", addColorsStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColorOnBody() {
  const color = randomIntegerFromInterval(0, colors.length - 1);

  document.body.style.backgroundColor = colors[color];
}

let interval = null;

function addColorStart() {
  if (interval) {
    return;
  }
  refs.start.disabled = true;
  interval = setInterval(() => setRandomColorOnBody(), 1000);
}

function addColorsStop(e) {
  refs.start.disabled = false;
  clearInterval(interval);
  interval = null;
}
