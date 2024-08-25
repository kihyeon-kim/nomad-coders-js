const clockTitle = document.querySelector(".js-clock");

function getPadStr(num) {
  return num.toString().padStart(2, "0");
}

function printRemains() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const christmasDate = new Date(currentYear + "-12-25");
  const diffDate = new Date(christmasDate - today);

  const days = Math.floor(diffDate / (24 * 60 * 60 * 1000));
  const hours = getPadStr(
    Math.floor((diffDate % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  );
  const minutes = getPadStr(
    Math.floor((diffDate % (60 * 60 * 1000)) / (60 * 1000))
  );
  const seconds = getPadStr(Math.floor((diffDate % (60 * 1000)) / 1000));

  clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

printRemains();
setInterval(printRemains, 1000);
