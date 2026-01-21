<!DOCTYPE html>
<html>
<head>
  <title>Weather App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="weather-box">
    <h2>Weather Application</h2>

    <input type="text" id="city" placeholder="Enter City Name">
    <br><br>
    <button onclick="getWeather()">Get Weather</button>

    <div id="output">
      <h3 id="place"></h3>
      <p id="temp"></p>
      <p id="weather"></p>
      <p id="humidity"></p>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  background: #87CEEB;
  font-family: Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.weather-box {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

input {
  width: 90%;
  padding: 8px;
}

button {
  padding: 8px 15px;
  cursor: pointer;
}
const apiKey = "24ff380d168fad32eb7f4d1abea6099a";

function getWeather() {
  let city = document.getElementById("city").value;

  if (city === "") {
    alert("Enter city name");
    return;
  }

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city +
    "&units=metric&appid=" +
    apiKey;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("place").innerHTML =
        data.name + ", " + data.sys.country;

      document.getElementById("temp").innerHTML =
        "Temperature: " + data.main.temp + " °C";

      document.getElementById("weather").innerHTML =
        "Weather: " + data.weather[0].description;

      document.getElementById("humidity").innerHTML =
        "Humidity: " + data.main.humidity + "%";
    })
    .catch(() => {
      alert("City not found");
    });
}
