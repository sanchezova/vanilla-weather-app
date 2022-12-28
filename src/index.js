function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = Math.round(response.data.temperature.humidity);
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "bod333b3adb0ta70a4454248ff525f81";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Seattle&key=bod333b3adb0ta70a4454248ff525f81&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
