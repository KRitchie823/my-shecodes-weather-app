function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp-value");
  let temperature = Math.round(response.data.temperature.current);
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function updateCity(event) {
  event.preventDefault();
  let updateCity = document.querySelector("#search-input");

  let city = updateCity.value;
  let apiKey = "798dc9fa0390f84ceb8a41oa8b735ct6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemperature);
  updateCity.innerHTML = city;
}
let enterCity = document.querySelector("form");
enterCity.addEventListener("submit", updateCity);

//

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let currentDateElement = document.querySelector("#current-day-time");
let currentDate = new Date();
currentDateElement.innerHTML = formatDate(currentDate);
