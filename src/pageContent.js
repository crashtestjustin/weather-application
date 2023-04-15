import {
  createDiv,
  createInput,
  createButton,
  createImg,
} from "./helperFunctions";
import { getForecastedWeather } from "./weatherApi";
import { setWeatherMode } from "./processing";

export function header() {
  const mainSection = createDiv("header");

  const searchBar = createInput(
    "text",
    "search-bar",
    "search-bar",
    "Enter Location"
  );
  mainSection.appendChild(searchBar);

  searchBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement === searchBar) {
      getForecastedWeather(searchBar.value);
    }
  });

  const searchBtn = createButton("search-button", "Search");
  mainSection.appendChild(searchBtn);

  searchBtn.addEventListener("click", (e) => {
    getForecastedWeather(searchBar.value);
  });

  const celcius = createButton("set-c", "C");
  celcius.selected = true;
  mainSection.appendChild(celcius);

  celcius.addEventListener("click", (e) => {
    setWeatherMode("C");
  });

  const farenheit = createButton("set-f", "F");
  farenheit.selected = false;
  mainSection.appendChild(farenheit);

  farenheit.addEventListener("click", (e) => {
    setWeatherMode("F");
  });

  return mainSection;
}

export function body() {
  const mainSection = createDiv("main");

  const currentWeatherDiv = createDiv("current-weather");
  const location = createDiv("city-location");
  const time = createDiv("city-time");
  const currentWeatherIcon = createImg("current-icon");
  const weatherCondition = createDiv("weather-condition");
  const currentTemperature = createDiv("current-temp");
  const feelsLike = createDiv("feels-like");
  const highTemp = createDiv("high-temp");
  const lowTemp = createDiv("low-temp");
  currentWeatherDiv.append(
    location,
    // time,
    currentWeatherIcon,
    weatherCondition,
    currentTemperature,
    feelsLike,
    highTemp,
    lowTemp
  );

  mainSection.appendChild(currentWeatherDiv);

  const todayForecastedWeatherDiv = createDiv("forecasted-weather");
  todayForecastedWeatherDiv.textContent = `Today Forecasted Weather`;

  for (let i = 0; i < 24; i++) {
    const hourDiv = createDiv("hour");
    todayForecastedWeatherDiv.appendChild(hourDiv);
    const hourIcon = createImg("hour-icon");
    const hourTemp = createDiv("hour-temp");
    const hourTime = createDiv("hour-time");
    hourDiv.appendChild(hourIcon);
    hourDiv.appendChild(hourTemp);
    hourDiv.appendChild(hourTime);
  }
  mainSection.appendChild(todayForecastedWeatherDiv);

  const upcomingForecastedWeatherDiv = createDiv("upcoming-forecasted-weather");
  upcomingForecastedWeatherDiv.textContent = `Upcoming Forecasted Weather`;
  const tomorrowForecast = createDiv("tomorrow-forecast");
  const tomIcon = createImg("tomorrow-icon");
  tomIcon.textContent = "[weathericon here]";
  const tomDate = createDiv("tomorrow-date");
  const tomHigh = createDiv("tom-high");
  const tomLow = createDiv("tom-low");
  tomorrowForecast.append(tomIcon, tomDate, tomHigh, tomLow);
  const twoDaysforecast = createDiv("two-days-forecast");
  const twoDaysIcon = createImg("two-days-icon");
  twoDaysIcon.textContent = "[weathericon here]";
  const twoDaysDate = createDiv("2-days-date");
  const twoDaysHigh = createDiv("2-days-high");
  const twoDaysLow = createDiv("2-days-low");
  twoDaysforecast.append(twoDaysIcon, twoDaysDate, twoDaysHigh, twoDaysLow);
  upcomingForecastedWeatherDiv.append(tomorrowForecast, twoDaysforecast);
  mainSection.appendChild(upcomingForecastedWeatherDiv);

  return mainSection;
}

export function footer() {
  const mainSection = createDiv("footer");
  mainSection.textContent = "Footer";

  return mainSection;
}

getForecastedWeather();
