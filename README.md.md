# 🌤 Weather App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![OpenWeather API](https://img.shields.io/badge/OpenWeather_API-EB6E4B?style=flat&logo=openweathermap&logoColor=white)
![Async/Await](https://img.shields.io/badge/Async%2FAwait-ES6+-blue?style=flat)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat)

A real-time weather app built with vanilla JavaScript that fetches live weather data using the OpenWeatherMap API. Enter any city name and instantly see temperature, humidity and wind speed — with a dynamic background colour that changes based on how hot or cold it is.

---

## 🌐 Live Demo

**[https://jinaljain733-cmd.github.io/weather-app/](https://jinaljain733-cmd.github.io/weather-app/)**

---

## ✨ Features

- Live weather data from OpenWeatherMap API
- Search any city in the world
- Shows temperature (°C), humidity (%) and wind speed (m/s)
- Dynamic background colour changes based on temperature
- Kelvin to Celsius conversion
- Clean centered card UI with box shadow
- `defer` attribute for optimised script loading
- Handles empty input gracefully

---

## 🌡️ Temperature → Background Colour Logic

| Temperature | Background Colour |
|---|---|
| Below 0°C | Light Blue ❄️ |
| 0°C – 9°C | Light Green 🌿 |
| 10°C – 19°C | Light Yellow ☁️ |
| 20°C – 29°C | Light Salmon 🌤 |
| 30°C and above | Light Coral 🔥 |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure, semantic markup |
| CSS3 | Card layout, Flexbox, hover effects |
| JavaScript (ES6+) | API calls, DOM manipulation, logic |
| OpenWeatherMap API | Live weather data by city name |
| Fetch API | HTTP GET request to OpenWeatherMap |
| Async / Await | Asynchronous data fetching |

---

## 🧠 JavaScript Concepts Used

- `async/await` — clean asynchronous API calls
- `fetch()` — REST API integration
- `response.json()` — parsing API response
- Kelvin to Celsius: `Math.floor(temp - 273.15)`
- `addEventListener("change")` — triggers search on input change
- `window.onload` — initialises app on page load
- `Object.keys(data).length === 0` — empty response check
- `element.style.backgroundColor` — dynamic inline style
- `innerHTML` — rendering weather data to DOM
- Template literals — clean HTML string building

---

## 📁 Project Structure

```
weather_app/
├── index.html      # App structure
├── style.css       # Styling
├── script.js       # API logic & DOM rendering
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/jinaljain733-cmd/weather-app.git

# Go into the folder
cd weather_app

# Open in browser
open index.html
```

> **Note:** The app uses the OpenWeatherMap API. If the API key stops working, get a free one at [openweathermap.org](https://openweathermap.org/api) and replace it in `script.js`.

---

## 📱 Responsive

The card is centered with a fixed width of 350px — works cleanly on both desktop and mobile screens.

---

## 👤 Author

**Jinal Jain**
- GitHub: [@jinaljain733-cmd](https://github.com/jinaljain733-cmd)
- LinkedIn: [linkedin.com/in/jinal-jain-08b70328b](https://linkedin.com/in/jinal-jain-08b70328b)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

> ⚠️ Please do not reuse or redistribute this project as your own work.