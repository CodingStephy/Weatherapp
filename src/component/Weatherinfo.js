import React from "react";

const WeatherInf = ({ weatherData }) => {
  let clrTemp;
  if (weatherData.main.temp > 90) {
    clrTemp = <h1 style={{ color: "red" }}>{weatherData.main.temp}</h1>;
  } else if (weatherData.main.temp < 40) {
    clrTemp = <h1 style={{ color: "aqua" }}>{weatherData.main.temp}</h1>;
  } else {
    clrTemp = <h1>{weatherData.main.temp}</h1>;
  }

  return (
    <>
      <small id="place">{weatherData.name}</small>
      <h1>{clrTemp}</h1>
      <h2>{weatherData.weather[0].description}</h2>
      <div className="min-max">
        <div className="temps">
          <small>min</small>
          <h2>{weatherData.main.temp_min}</h2>
        </div>
        <div className="temps">
          <small>max</small>
          <h2>{weatherData.main.temp_max}</h2>
        </div>
      </div>
    </>
  );
};

export default WeatherInf;