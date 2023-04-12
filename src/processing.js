import { getForecastedWeather } from "./weatherApi";
export let weathermode = ["C"];

export function setWeatherMode(newMode) {
  const cBtn = document.querySelector(".set-c");
  const fBtn = document.querySelector(".set-f");

  weathermode = [];
  weathermode.push(newMode);
  console.log(weathermode);

  if (weathermode.includes("C")) {
    getForecastedWeather();
    cBtn.style.backgroundColor = "var(--day-button-bg-color)";
    fBtn.style.backgroundColor = "var(--day-bg-color)";
  } else {
    getForecastedWeather();
    cBtn.style.backgroundColor = "var(--day-bg-color)";
    fBtn.style.backgroundColor = "var(--day-button-bg-color)";
  }
}
