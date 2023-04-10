import { createDiv } from "./helperFunctions";
import { getForecastedWeather } from "./weatherApi";

export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Hello";

  return mainSection;
}

getForecastedWeather("V7M");
