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

export function setCurrentWeather(currentWeather, locationData, forecastData) {
  const locationName = document.querySelector(".city-location");
  locationName.textContent = locationData.name;

  const locationTime = document.querySelector(".city-time");
  locationTime.textContent = locationData.localtime.slice(10);

  const weatherCondition = document.querySelector(".weather-condition");
  weatherCondition.textContent = currentWeather.condition.text;

  const currentTemp = document.querySelector(".current-temp");
  const feelsLike = document.querySelector(".feels-like");
  const highTemp = document.querySelector(".high-temp");
  const lowTemp = document.querySelector(".low-temp");
  if (weathermode.includes("C")) {
    currentTemp.textContent = `${currentWeather.temp_c}°C`;
    feelsLike.textContent = `Feels Like: ${currentWeather.feelslike_c}°C`;
    highTemp.textContent = `H: ${forecastData.forecastday[0].day.maxtemp_c}°C`;
    lowTemp.textContent = `L: ${forecastData.forecastday[0].day.mintemp_c}°C`;
  } else {
    currentTemp.textContent = `${currentWeather.temp_f}°F`;
    feelsLike.textContent = `Feels Like: ${currentWeather.feelslike_f}°F`;
    highTemp.textContent = `H: ${forecastData.forecastday[0].day.maxtemp_f}°F`;
    lowTemp.textContent = `L: ${forecastData.forecastday[0].day.mintemp_f}°F`;
  }
}

export function setForecastedWeather(forecast) {
  const tomorrowWeather = document.querySelector(".tomorrow-forecast");
  const tomForecastEls = tomorrowWeather.querySelectorAll("div");
  const twoDaysWeather = document.querySelector(".two-days-forecast");
  const twoDaysForecastEls = twoDaysWeather.querySelectorAll("div");

  let tempC;
  weathermode.includes("C") ? (tempC = true) : (tempC = false);

  for (let i = 0; i < tomForecastEls.length; i++) {
    console.log(tomForecastEls[i]);
    if (i === 1) {
      tomForecastEls[i].textContent = forecast.forecastday[1].date;
    } else if (i === 2) {
      if (tempC) {
        tomForecastEls[
          i
        ].textContent = `H: ${forecast.forecastday[1].day.maxtemp_c}°C`;
      } else {
        tomForecastEls[
          i
        ].textContent = `H: ${forecast.forecastday[1].day.maxtemp_f}°F`;
      }
    } else if (i === 3) {
      if (tempC) {
        tomForecastEls[
          i
        ].textContent = `L: ${forecast.forecastday[1].day.mintemp_c}°C`;
      } else {
        tomForecastEls[
          i
        ].textContent = `L: ${forecast.forecastday[1].day.mintemp_f}°F`;
      }
    }
  }

  //   twoDaysWeather.textContent = forecast.forecastday[2].date;

  for (let i = 0; i < twoDaysForecastEls.length; i++) {
    console.log(twoDaysForecastEls[i]);
    if (i === 1) {
      twoDaysForecastEls[i].textContent = forecast.forecastday[2].date;
    } else if (i === 2) {
      if (tempC) {
        twoDaysForecastEls[
          i
        ].textContent = `H: ${forecast.forecastday[2].day.maxtemp_c}°C`;
      } else {
        twoDaysForecastEls[
          i
        ].textContent = `H: ${forecast.forecastday[2].day.maxtemp_f}°F`;
      }
    } else if (i === 3) {
      if (tempC) {
        twoDaysForecastEls[
          i
        ].textContent = `L: ${forecast.forecastday[2].day.mintemp_c}°C`;
      } else {
        twoDaysForecastEls[
          i
        ].textContent = `L: ${forecast.forecastday[2].day.mintemp_f}°F`;
      }
    }
  }
}
