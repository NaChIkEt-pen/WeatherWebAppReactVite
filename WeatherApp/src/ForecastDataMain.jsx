import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

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
        console.log(result);
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
  if (forecastData != null) return <h1>{forecastData.cod}</h1>;
  else return null;
}

export default ForecastDataMain;
//`${API.baseUrl}forecast?q=${passedSearch}&units=metric&appid=${API.key}`
