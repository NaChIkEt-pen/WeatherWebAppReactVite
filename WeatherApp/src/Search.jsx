import React, { useState } from "react";
import { ReactDOM } from "react";
import "./CSS/Search.css";
import { FaSearchLocation } from "react-icons/fa";
import TitleSubtitle from "./TitleSubtitle";
import WeatherIcon from "./wetatherIcon";
import ForecastDataMain from "./ForecastDataMain";
import TempData from "./TempData";

function Search() {
  const API = {
    key: import.meta.env.VITE_APIkey,
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [icon, setIcon] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherCord, setWeatherCord] = useState("");
  const [temp, setTemp] = useState("");

  const searchPressed = () => {
    //console.log(search);
    fetch(`${API.baseUrl}weather?q=${search}&units=metric&appid=${API.key}`)
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setWeatherData(result);
        setIcon(result.weather[0].icon);
        setWeather(result.weather[0]);
        setWeatherCord(result.cord);
        setTemp(result.main.temp);
      });
  };
  return (
    <div className="mainDiv">
      <div className="SearchDiv">
        <input
          type="text"
          placeholder="Enter City Name"
          className="seacrhInput"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchButton" onClick={searchPressed}>
          <FaSearchLocation />
        </button>
      </div>

      <div className="TilteSubtilteDiv">
        <TitleSubtitle passedData={[weatherData.name, weatherData]} />
      </div>

      <WeatherIcon passedIcon={icon} />

      <TempData passedTemp={temp} />

      <h3 className="weatherDescription">{weather.description}</h3>

      <ForecastDataMain passedSearch={weatherData} />
    </div>
  );
}

export default Search;
