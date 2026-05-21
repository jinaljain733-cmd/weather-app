// Add event listener on input field when value changes
document.getElementById("location-input").addEventListener("change", async () => {
    
    // Get the user entered location value
    const location = document.getElementById("location-input").value;
    
    // Fetch weather data based on the entered location
    const weatherData = await getWeatherData(location);
    
    // Display the fetched weather data on the page
    displayWeatherData(weatherData);
});


// Function to fetch weather data
const getWeatherData = async (location) => {

    // If no location is entered, return empty object
    if (!location) {
        return {};
    }

    const apiKey = "a08c68e316dfc" + "7b0ffba26fd02a64b66";

    // Fetch data from OpenWeather API
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    // Convert response to JSON
    const data = await response.json();

    return data;
};


// Function to return background color based on temperature
function getBackgroundColor(temperature) {

    if (temperature < 0) {
        return "lightblue";
    } else if (temperature < 10) {
        return "lightgreen";
    } else if (temperature < 20) {
        return "lightyellow";
    } else if (temperature < 30) {
        return "lightsalmon";
    } else {
        return "lightcoral";
    }
}


// Function to display weather data
const displayWeatherData = (data) => {

    const weatherDataElement = document.getElementById("weather-data");

    // If no data
    if (Object.keys(data).length === 0) {
        weatherDataElement.innerHTML = "Please enter a location to see the weather.";
        return;
    }

    // Convert Kelvin to Celsius
    const tempCelsius = Math.floor(data.main.temp - 273.15);

    // Get humidity
    const humidity = data.main.humidity;

    // Set background color
    const backgroundColor = getBackgroundColor(tempCelsius);
    weatherDataElement.style.backgroundColor = backgroundColor;

    // Show data
    weatherDataElement.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${tempCelsius}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
};


// Run when page loads
window.onload = async () => {
    displayWeatherData({});
};