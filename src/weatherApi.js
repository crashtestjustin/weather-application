import {
  weathermode,
  setCurrentWeather,
  setForecastedWeather,
} from "./processing";

export let previousSearch = ["New York City"];

export async function getForecastedWeather(locationQuery) {
  let searchQuery;
  if (locationQuery === undefined || locationQuery === "") {
    searchQuery = previousSearch;
  } else {
    searchQuery = locationQuery;
    previousSearch = [];
    previousSearch.push(locationQuery);
  }
  let baseUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=4e0461a2596747cfb3e125853230404&days=3&q=";
  let searchUrl = `${baseUrl}${searchQuery}`;
  console.log(searchUrl);
  try {
    const response = await fetch(searchUrl, { mode: "cors" });
    const weatherData = await response.json();
    setCurrentWeather(
      weatherData.current,
      weatherData.location,
      weatherData.forecast
    );
    setForecastedWeather(weatherData.forecast);
    currentWeatherStats(weatherData.current, weatherData.location);
    futureWeather(weatherData.forecast);
  } catch (error) {
    console.log(error);
  }
  console.log(previousSearch);
}

function currentWeatherStats(currentWeather, locationData) {
  console.log(locationData.name);
  console.log(locationData.localtime);
  console.log(`Weather Condition: ${currentWeather.condition.text}`);
  if (weathermode.includes("C")) {
    console.log(`Current Temp: ${currentWeather.temp_c}C`);
    console.log(`Feels Like: ${currentWeather.feelslike_c}C`);
  } else {
    console.log(`Current Temp: ${currentWeather.temp_f}F`);
    console.log(`Feels Like: ${currentWeather.feelslike_f}F`);
  }
}

function futureWeather(forecast) {
  console.log(forecast.forecastday[0]);
  console.log(forecast.forecastday[1]);
  console.log(forecast.forecastday[2]);
}
