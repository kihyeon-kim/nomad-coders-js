const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "aa0f3d3af4441fd9d13ea3c11bfa6291";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // 401. API key error.
      // city.innerText = data.name;
      // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      city.innerText = 'Jeju'
      weather.innerText = `Sunny, 30℃`
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);