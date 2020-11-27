const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=80ade633c3150127b8188f51cb8e0b1a";

// The formula to calculate the wind chill factor is 
// LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16} f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , 
// where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
// and s is the wind speed in miles per hour.
// Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind speeds above 4.8 kilometres per hour (3.0 mph)."

function compute_wind_chill(temperature, wind_speed) {
  const T = temperature;
  const W = wind_speed;
  const WC = 35.74 + (0.6215 * T) - (35.75 * wind_speed ** 0.16) + (0.4275 * T * W ** 0.16)

  return Math.floor(WC)
}

fetch(apiURL)
  .then(response => response.json())
  .then(jsObject => {
    let data_source = jsObject;
    let currently = data_source.weather[0].main;
    document.getElementById("currently").textContent = currently;
    let temperature = data_source.main.temp_max;
    document.getElementById("temperature").textContent = temperature;
    let humidity = data_source.main.humidity;
    document.getElementById("humidity").textContent = humidity;
    let wind_speed = data_source.wind.speed;
    document.getElementById("wind_speed").textContent = wind_speed;

    let temperature_value, wind_speed_value, wind_chill_value, wind_chill_computed;
    temperature_value = temperature;
    wind_speed_value = wind_speed;
    wind_chill_value = document.getElementById('wind_chill');
    wind_chill_computed = compute_wind_chill(temperature, wind_speed);

    if (temperature_value <= 50 && wind_speed_value > 3) {
      wind_chill_value.innerHTML = wind_chill_computed;
      document.getElementById('wind_chill_attribute').style.visibility = 'visible';
    } else {
      wind_chill_value.innerHTML = 'N/A';
      document.getElementById('wind_chill_attribute').style.visibility = 'hidden';
    }
  });

