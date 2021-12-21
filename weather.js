class Weather {
  constructor(location) {
    this.apikey = "a70e90b9fec24d2b917151913212112";
    this.location = location;
  }

  // Fetch weather from API
  async getWeather() {
    const responce = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${this.location}&aqi=no`
    );

    const responceData = await responce.json();

    return responceData;
  }

  // Change Weather Location
  changeLocation(location) {
    this.location = location;
  }
}
