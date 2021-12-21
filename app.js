// Init weather object
const weather = new Weather("Kolkata");

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation('London');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
