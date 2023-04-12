import { createDiv, createInput, createButton } from "./helperFunctions";
import { getForecastedWeather } from "./weatherApi";
import { setWeatherMode } from "./processing";

export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Header";

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

getForecastedWeather();
