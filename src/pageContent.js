import { createDiv } from "./helperFunctions";
import { getForecastedWeather } from "./weatherApi";

export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Header";

  return mainSection;
}

export function body() {
  const mainSection = createDiv("main");

  const currentWeatherDiv = createDiv("current-weather");
  currentWeatherDiv.textContent = `Current Weather`;
  mainSection.appendChild(currentWeatherDiv);

  const todayForecastedWeatherDiv = createDiv("forecasted-weather");
  todayForecastedWeatherDiv.textContent = `Today Forecasted Weather`;
  mainSection.appendChild(todayForecastedWeatherDiv);

  const upcomingForecastedWeatherDiv = createDiv("upcoming-forecasted-weather");
  upcomingForecastedWeatherDiv.textContent = `Upcoming Forecasted Weather`;
  mainSection.appendChild(upcomingForecastedWeatherDiv);

  return mainSection;
}

export function footer() {
  const mainSection = createDiv("footer");
  mainSection.textContent = "Footer";

  return mainSection;
}

getForecastedWeather("V7M");
