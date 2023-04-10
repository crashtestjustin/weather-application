export function createDiv(className, idName) {
  const div = document.createElement("div");
  div.className = className;
  div.id = idName;
  div.id === "undefined" ? (div.id = className) : "";
  return div;
}
