export function createDiv(className, idName) {
  const div = document.createElement("div");
  div.className = className;
  div.id = idName;
  div.id === "undefined" ? (div.id = className) : "";
  return div;
}

export function createInput(inputType, inputId, inputName, inputPlaceholder) {
  const input = document.createElement("input");
  input.type = inputType;
  input.id = inputId;
  inputName = inputName;
  input.placeholder = inputPlaceholder;
  return input;
}

export function createButton(btnClass, btnTextContent) {
  const button = document.createElement("button");
  button.className = btnClass;
  button.textContent = btnTextContent;
  return button;
}
