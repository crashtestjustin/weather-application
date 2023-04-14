import {
  setCurrentWeather,
  setForecastedWeather,
  getTodayForecast,
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
    getTodayForecast(weatherData.forecast);
  } catch (error) {
    console.log(error);
  }
}
