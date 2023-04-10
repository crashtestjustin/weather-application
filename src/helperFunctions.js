export function createDiv(className, idName) {
  const div = document.createElement("div");
  div.className = className;
  div.id = idName;

  return div;
}
