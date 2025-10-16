// script.js

const apiKey = "YOUR_API_KEY"; // Replace with your API key from OpenWeatherMap

function getWeather() {
    const city = document.getElementById('cityInput').value;
    let url = '';

    if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    } else if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            fetchWeather(url);
        }, () => {
            document.getElementById('weatherResult').innerHTML = "Could not get location.";
        });
        return;
    } else {
        document.getElementById('weatherResult').innerHTML = "Enter a city name or enable location.";
        return;
    }

    fetchWeather(url);
}

function fetchWeather(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherResult').innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById('weatherResult').innerHTML = "City not found.";
            }
        })
        .catch(() => {
            document.getElementById('weatherResult').innerHTML = "Error fetching weather data.";
        });
}
