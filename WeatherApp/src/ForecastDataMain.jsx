import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

const list = [];
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function ForecastDataMain({ passedSearch }) {
  const API = {
    key: import.meta.env.VITE_APIkey,
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };
  const [forecastData, setForecastData] = useState(null);
  const [cod, setcod] = useState(null);
  useEffect(() => {
    // Fetch data from the API

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API.baseUrl}forecast?q=${passedSearch}&units=metric&appid=${API.key}`
        );
        const result = await response.json();
        setForecastData(result);
        setcod(result.cod);
        //console.log(result);
        const data = result.list;

        data.forEach((element) => {
          var obj = {};
          obj["temp"] = `${element.main.temp} °C`;
          obj["icon"] = element.weather[0].icon;
          const dateData = new Date(
            element.dt * 1000 - result.city.timezone * 1000
          );
          obj["day"] = weekday[dateData.getDay()];
          obj[
            "time"
          ] = `${dateData.getHours()}:${dateData.getMinutes()}:${dateData.getSeconds()}`;
          list.push(obj);
        });
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data only if it hasn't been fetched before
    if (passedSearch && !forecastData) {
      fetchData();
    }
  }, [API.key, API.baseUrl, passedSearch]);
  //

  if (forecastData != null) return <>{console.log(list)}</>;
  else return null;
}

export default ForecastDataMain;
//`${API.baseUrl}forecast?q=${passedSearch}&units=metric&appid=${API.key}`
