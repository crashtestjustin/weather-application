export let weathermode = ["C"];

export function setWeatherMode(newMode) {
  const cBtn = document.querySelector(".set-c");
  const fBtn = document.querySelector(".set-f");

  weathermode = [];
  weathermode.push(newMode);
  console.log(weathermode);

  if (weathermode.includes("C")) {
    cBtn.style.backgroundColor = "#000000";
    cBtn.style.color = "#ffffff";
    fBtn.style.backgroundColor = "#ffffff";
    fBtn.style.color = "#000000";
  } else {
    cBtn.style.backgroundColor = "#ffffff";
    cBtn.style.color = "#000000";
    fBtn.style.backgroundColor = "#000000";
    fBtn.style.color = "#ffffff";
  }
}
