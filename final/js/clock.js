const clock = document.querySelector("#clock");

function getPadStr(num) {
  return num.toString().padStart(2, "0");
}

function displayClock() {
  const today = new Date();
  const hours = getPadStr(today.getHours());
  const minutes = getPadStr(today.getMinutes());
  const seconds = getPadStr(today.getSeconds());

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

displayClock();
setInterval(displayClock, 1000);
