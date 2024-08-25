const maxValueInput = document.querySelector("#maxValue");
const guessInput = document.querySelector("#guess");
const playBtn = document.querySelector("#play");

const humanChoose = document.querySelector("#human");
const machineChoose = document.querySelector("#machine");

const chooseDisplay = document.querySelector("#choose");
const resultDisplay = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleChoose(guessValue, machineValue) {
  humanChoose.innerHTML = guessValue;
  machineChoose.innerHTML = machineValue;
}

function handlePlay() {
  chooseDisplay.classList.remove(HIDDEN_CLASSNAME);
  resultDisplay.classList.remove(HIDDEN_CLASSNAME);

  const maxValue = maxValueInput.value;
  const guessValue = parseInt(guessInput.value);
  const machineValue = getRandomInt(1, maxValue);

  handleChoose(guessValue, machineValue);

  if (machineValue === guessValue) {
    resultDisplay.innerHTML = "You Win!";
  } else {
    resultDisplay.innerHTML = "You Lost!";
  }
}

playBtn.addEventListener("click", handlePlay);
