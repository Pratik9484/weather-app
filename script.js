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
