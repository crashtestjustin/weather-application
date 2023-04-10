export async function getForecastedWeather(locationQuery) {
  let baseUrl =
    "http://api.weatherapi.com/v1/forecast.json?key=4e0461a2596747cfb3e125853230404&days=14&q=";
  let searchUrl = `${baseUrl}${locationQuery}`;
  console.log(searchUrl);
  try {
    const response = await fetch(searchUrl, { mode: "cors" });
    const weatherData = await response.json();

    //set locations on page with weather data as needed or export to set on another module
    console.log(weatherData);
  } catch (error) {
    console.log(error);
  }
}
