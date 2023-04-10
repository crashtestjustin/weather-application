import { createDiv } from "./helperFunctions";
import { getCurrentWeather } from "./weatherApi";

export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Hello";

  return mainSection;
}

getCurrentWeather("New Westminster");
