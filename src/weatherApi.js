export async function getForecastedWeather(locationQuery) {
  let baseUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=4e0461a2596747cfb3e125853230404&days=3&q=";
  let searchUrl = `${baseUrl}${locationQuery}`;
  console.log(searchUrl);
  try {
    const response = await fetch(searchUrl, { mode: "cors" });
    const weatherData = await response.json();
    currentWeatherStats(weatherData.current, weatherData.location);
    futureWeather(weatherData.forecast);
  } catch (error) {
    console.log(error);
  }
}

function currentWeatherStats(currentWeather, locationData) {
  console.log(currentWeather.condition.text);
  console.log(currentWeather.temp_c);
  console.log(currentWeather.feelslike_c);
  console.log(currentWeather.temp_f);
  console.log(currentWeather.feelslike_f);
  console.log(locationData.name);
  console.log(locationData.localtime);
}

function futureWeather(forecast) {
  console.log(forecast);
  console.log(forecast.forecastday[1]);
  console.log(forecast.forecastday[2]);
}
