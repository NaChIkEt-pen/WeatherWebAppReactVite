import React, { useState } from "react";
import { ReactDOM } from "react";

function ForecastDataMain({ passedSearch }) {
  const API = {
    key: import.meta.env.VITE_APIkey,
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  };
  const [forecastData, setForecastData] = useState("");
  if (passedSearch != null) {
    fetch(
      `${API.baseUrl}forecast?q=${passedSearch}&units=metric&appid=${API.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setForecastData(result);
      });
  }

  return <></>;
}

export default ForecastDataMain;
