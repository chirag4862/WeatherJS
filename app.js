// Init Local Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Chnage Location Event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  // Change Location
  weather.changeLocation(city);

  // Set Location in LocalStorage
  storage.setLocationData(city);

  // Get Weather
  getWeather();

  // Close Modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
