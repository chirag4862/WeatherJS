class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c}°C`;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = `Realative Humidity: ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c}°C`;
    this.pressure.textContent = `Pressure: ${weather.current.pressure_mb} mb`;
    this.wind.textContent = `Wind Speed: ${weather.current.wind_kph} Km/Ph`;
  }
}
