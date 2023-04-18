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
  //   locationTime.textContent = locationData.localtime.slice(10);

  const currentWeatherIcon = document.querySelector(".current-icon");
  currentWeatherIcon.src = forecastData.forecastday[0].day.condition.icon;

  const weatherCondition = document.querySelector(".weather-condition");
  weatherCondition.textContent = currentWeather.condition.text;

  const currentTemp = document.querySelector(".current-temp");
  const feelsLike = document.querySelector(".feels-like");
  const highTemp = document.querySelector(".high-temp");
  const lowTemp = document.querySelector(".low-temp");
  if (weathermode.includes("C")) {
    currentTemp.textContent = `${currentWeather.temp_c}°C`;
    feelsLike.textContent = `Feels Like: ${currentWeather.feelslike_c}°C`;
    highTemp.textContent = `H: ${forecastData.forecastday[0].day.maxtemp_c}°C / L: ${forecastData.forecastday[0].day.mintemp_c}°C`;
    // lowTemp.textContent = `L: ${forecastData.forecastday[0].day.mintemp_c}°C`;
  } else {
    currentTemp.textContent = `${currentWeather.temp_f}°F`;
    feelsLike.textContent = `Feels Like: ${currentWeather.feelslike_f}°F`;
    highTemp.textContent = `H: ${forecastData.forecastday[0].day.maxtemp_f}°F / L: ${forecastData.forecastday[0].day.mintemp_f}°F`;
    // lowTemp.textContent = `L: ${forecastData.forecastday[0].day.mintemp_f}°F`;
  }
}

export function setForecastedWeather(forecast) {
  const tomorrowWeather = document.querySelector(".tomorrow-forecast");
  const tomForecastEls = tomorrowWeather.querySelectorAll("div");
  const twoDaysWeather = document.querySelector(".two-days-forecast");
  const twoDaysForecastEls = twoDaysWeather.querySelectorAll("div");
  const tomIcon = tomorrowWeather.querySelector(".tomorrow-icon");
  const twoDaysIcon = twoDaysWeather.querySelector(".two-days-icon");

  tomIcon.src = forecast.forecastday[1].day.condition.icon;
  twoDaysIcon.src = forecast.forecastday[2].day.condition.icon;

  let tempC;
  weathermode.includes("C") ? (tempC = true) : (tempC = false);

  for (let i = 0; i < tomForecastEls.length; i++) {
    if (i === 0) {
      tomForecastEls[i].textContent = forecast.forecastday[1].date;
    } else if (i === 1) {
      if (tempC) {
        tomForecastEls[
          i
        ].textContent = `${forecast.forecastday[1].day.maxtemp_c}`;
      } else {
        tomForecastEls[
          i
        ].textContent = `${forecast.forecastday[1].day.maxtemp_f}`;
      }
    } else if (i === 2) {
      if (tempC) {
        tomForecastEls[
          i
        ].textContent = `${forecast.forecastday[1].day.mintemp_c}`;
      } else {
        tomForecastEls[
          i
        ].textContent = `${forecast.forecastday[1].day.mintemp_f}`;
      }
    }
  }

  for (let i = 0; i < twoDaysForecastEls.length; i++) {
    if (i === 0) {
      twoDaysForecastEls[i].textContent = forecast.forecastday[2].date;
    } else if (i === 1) {
      if (tempC) {
        twoDaysForecastEls[
          i
        ].textContent = `${forecast.forecastday[2].day.maxtemp_c}`;
      } else {
        twoDaysForecastEls[
          i
        ].textContent = `${forecast.forecastday[2].day.maxtemp_f}`;
      }
    } else if (i === 2) {
      if (tempC) {
        twoDaysForecastEls[
          i
        ].textContent = `${forecast.forecastday[2].day.mintemp_c}`;
      } else {
        twoDaysForecastEls[
          i
        ].textContent = `${forecast.forecastday[2].day.mintemp_f}`;
      }
    }
  }
}

export function getTodayForecast(forecast) {
  const hourTemps = document.querySelectorAll(".hour-temp");
  const hourIcon = document.querySelectorAll(".hour-icon");
  const hourTime = document.querySelectorAll(".hour-time");
  const forecastedWeatherTitle = document.querySelector(".today-div");

  forecastedWeatherTitle.textContent = `Hourly Forecast: ${forecast.forecastday[0].date}`;

  let tempC;
  weathermode.includes("C") ? (tempC = true) : (tempC = false);

  for (let i = 0; i < hourTemps.length; i++) {
    hourIcon[i].src = forecast.forecastday[0].hour[i].condition.icon;
    hourTime[i].textContent = forecast.forecastday[0].hour[i].time.slice(10);
    if (tempC) {
      hourTemps[i].textContent = `${forecast.forecastday[0].hour[i].temp_c}°C`;
    } else {
      hourTemps[i].textContent = `${forecast.forecastday[0].hour[i].temp_f}°F`;
    }
  }
}
