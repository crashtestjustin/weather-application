import {
  setCurrentWeather,
  setForecastedWeather,
  getTodayForecast,
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
  } catch (error) {
    console.log(error);
  } finally {
    toggleLoadingSpinner();
  }
}

export function toggleLoadingSpinner() {
  const overlay = document.querySelector(".overlay");
  const spinner = document.querySelector(".loading-content");

  console.log(overlay);
  console.log(spinner);

  if (spinner.style.display === "none") {
    console.log("set to BLOCK");
    overlay.style.display = "block";
    spinner.style.display = "grid";
  } else {
    console.log("set to NONE");
    overlay.style.display = "none";
    spinner.style.display = "none";
  }
}
