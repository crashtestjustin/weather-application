import { createDiv } from "./helperFunctions";

export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Hello";

  return mainSection;
}
