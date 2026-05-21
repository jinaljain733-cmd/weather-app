# 🌤️ Weather App

A clean, minimal weather application that shows real-time weather data for any city in the world using the OpenWeatherMap API.

---

## 🖥️ Live Preview

> Open `index.html` in your browser, enter any city name, and get instant weather data.

---

## ✨ Features

- 🔍 Search weather by any city name
- 🌡️ Shows temperature in Celsius
- 💧 Shows humidity percentage
- 💨 Shows wind speed in m/s
- 🎨 Background color changes based on temperature
- 📱 Responsive design — works on all screen sizes

---

## 🎨 Temperature Color Guide

| Temperature | Background Color |
|-------------|-----------------|
| Below 0°C | 🔵 Light Blue (freezing) |
| 0°C – 10°C | 🟢 Light Green (cold) |
| 10°C – 20°C | 🟡 Light Yellow (mild) |
| 20°C – 30°C | 🟠 Light Salmon (warm) |
| Above 30°C | 🔴 Light Coral (hot) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling & layout |
| Vanilla JavaScript | Logic & API calls |
| OpenWeatherMap API | Real-time weather data |

---

## 📁 Project Structure

```
weather-app/
├── index.html      # Markup & structure
├── style.css       # All styles
├── script.js       # API logic & display
├── .gitignore      # Git ignore rules
└── README.md       # This file
```

---

## 🚀 How to Run

**Option 1 — Direct open:**
1. Download or clone this repo
2. Double-click `index.html`
3. Opens in your browser instantly ✅

**Option 2 — VS Code Live Server:**
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

---

## 🔑 API Used

- **API:** [OpenWeatherMap – Current Weather Data](https://openweathermap.org/current)
- **Plan:** Free tier (no payment required)
- **Endpoint:** `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}`

> ⚠️ The API key in this project is for learning purposes only. For production use, store your API key in a `.env` file and never commit it to GitHub.

---

## 📖 How It Works

```
User types city name → presses Enter
         ↓
JavaScript fetches data from OpenWeatherMap API
         ↓
Converts temperature from Kelvin → Celsius
         ↓
Displays city, temperature, humidity, wind speed
         ↓
Background color updates based on temperature
```

---

## 🙋‍♂️ Author

**Jinal Jain**
- GitHub: [@jinaljain733-cmd](https://github.com/jinaljain733-cmd)

---

## 📄 License

This project is open source and free to use for learning purposes.
