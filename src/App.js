import React, { useState } from "react";
import Form from "./component/form";
import WeatherInf from "./component/Weatherinfo";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const getWeather = async (zip) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=e5248a7da79ac54d1106fde2d6791d8e`
    )
       const data = await response.json();
        setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Form getWeather={getWeather} />
      {weatherData.main ? <WeatherInf weatherData={weatherData} /> : null}
    </div>
  );
}

export default App;
