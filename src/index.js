let now = new Date();
function formatDate() {
  let days = [
    `MONDAY`,
    `TUESDAY`,
    `WEDNESDAY`,
    `THURSDAY`,
    `FRIDAY`,
    `SATURDAY`,
    `SUNDAY`,
  ];
  let currentTime = document.querySelector("#day-time");
  let currentDay = days[now.getDay()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  currentTime.innerHTML = `${currentDay} ${hour}:${minute}`;
}

formatDate();

function showTempF(event) {
  event.preventDefault();
  let displayTempF = document.querySelector("#temp");
  displayTempF.innerHTML = 53;
}
let convertToF = document.querySelector("#imperial-temp");
convertToF.addEventListener("click", showTempF);

function showTempC(event) {
  event.preventDefault();
  let displayTempC = document.querySelector("#temp");
  displayTempC.innerHTML = 12;
}

let convertToC = document.querySelector("#metric-temp");
convertToC.addEventListener("click", showTempC);

function searchCity(city) {
  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCityWeather);
}

function searchBar(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let displayCity = document.querySelector("#city-name");
  displayCity.innerHTML = city;
  searchCity(city);
}

function showCityWeather(response) {
  let city = response.data.name;
  let cityElement = document.querySelector("#city-name");
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  cityElement.innerHTML = city;
  tempElement.innerHTML = `${temp}°`;
  console.log(response.data.main.temp);
}

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchBar);

function showPosition(position) {
  let apiKey = "2718952144ed077c12e7c160fb6fc351";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showCityWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector(".currentbtn");
currentButton.addEventListener("click", getCurrentLocation);
