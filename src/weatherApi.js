import {
  setCurrentWeather,
  setForecastedWeather,
  getTodayForecast,
  handleError,
} from "./processing";

export let previousSearch = ["New York City"];
export async function getForecastedWeather(locationQuery) {
  toggleLoadingSpinner();
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
    handleError();
  } catch (error) {
    console.log(error);
    handleError(error);
  } finally {
    toggleLoadingSpinner();
  }
}

export function toggleLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  const spinner = document.querySelector(".loading-content");

  if (spinner.style.display === "none") {
    overlay.style.display = "block";
    spinner.style.display = "grid";
  } else {
    overlay.style.display = "none";
    spinner.style.display = "none";
  }
}
