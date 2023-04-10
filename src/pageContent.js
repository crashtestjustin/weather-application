export function header() {
  const mainSection = createDiv("header");
  mainSection.textContent = "Hello";

  return mainSection;
}

function createDiv(className, idName) {
  const div = document.createElement("div");
  div.className = className;
  div.id = idName;

  return div;
}
