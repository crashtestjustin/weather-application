import { createDiv, createInput, createButton } from "./helperFunctions";
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
    // processSearch(searchBar.value);
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
  const weatherCondition = createDiv("weather-condition");
  const currentTemperature = createDiv("current-temp");
  const feelsLike = createDiv("feels-like");
  const highTemp = createDiv("high-temp");
  const lowTemp = createDiv("low-temp");
  currentWeatherDiv.append(
    location,
    time,
    weatherCondition,
    currentTemperature,
    feelsLike,
    highTemp,
    lowTemp
  );

  mainSection.appendChild(currentWeatherDiv);

  const todayForecastedWeatherDiv = createDiv("forecasted-weather");
  todayForecastedWeatherDiv.textContent = `Today Forecasted Weather`;
  const hour0 = createDiv("hour");
  const hour1 = createDiv("hour");
  const hour2 = createDiv("hour");
  const hour3 = createDiv("hour");
  const hour4 = createDiv("hour");
  const hour5 = createDiv("hour");
  const hour6 = createDiv("hour");
  const hour7 = createDiv("hour");
  const hour8 = createDiv("hour");
  const hour9 = createDiv("hour");
  const hour10 = createDiv("hour");
  const hour11 = createDiv("hour");
  const hour12 = createDiv("hour");
  const hour13 = createDiv("hour");
  const hour14 = createDiv("hour");
  const hour15 = createDiv("hour");
  const hour16 = createDiv("hour");
  const hour17 = createDiv("hour");
  const hour18 = createDiv("hour");
  const hour19 = createDiv("hour");
  const hour20 = createDiv("hour");
  const hour21 = createDiv("hour");
  const hour22 = createDiv("hour");
  const hour23 = createDiv("hour");
  todayForecastedWeatherDiv.append(
    hour0,
    hour1,
    hour2,
    hour3,
    hour4,
    hour5,
    hour6,
    hour7,
    hour8,
    hour9,
    hour10,
    hour11,
    hour12,
    hour13,
    hour14,
    hour15,
    hour16,
    hour17,
    hour18,
    hour19,
    hour20,
    hour21,
    hour22,
    hour23
  );
  mainSection.appendChild(todayForecastedWeatherDiv);

  const upcomingForecastedWeatherDiv = createDiv("upcoming-forecasted-weather");
  upcomingForecastedWeatherDiv.textContent = `Upcoming Forecasted Weather`;
  const tomorrowForecast = createDiv("tomorrow-forecast");
  const tomIcon = createDiv("tomorrow-icon");
  tomIcon.textContent = "[weathericon here]";
  const tomDate = createDiv("tomorrow-date");
  const tomHigh = createDiv("tom-high");
  const tomLow = createDiv("tom-low");
  tomorrowForecast.append(tomIcon, tomDate, tomHigh, tomLow);
  const twoDaysforecast = createDiv("two-days-forecast");
  const twoDaysIcon = createDiv("2-days-icon");
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
