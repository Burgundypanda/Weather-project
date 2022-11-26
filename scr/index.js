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
  let minute = now.getMinutes();
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

function searchBar(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let displayCity = document.querySelector("#city-name");
  displayCity.innerHTML = city;
}

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchBar);
