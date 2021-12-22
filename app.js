// Init weather object
const weather = new Weather("Kolkata");

// Init UI
const ui = new UI();

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation('London');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
