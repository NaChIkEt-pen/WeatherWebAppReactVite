import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
//import ForecastCarousel from "./ForecastCarousel.jsx";
import Carousel from "react-multi-carousel";
import ForecastCard from "./ForecastCard";
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

var ctr = 0;
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
          `${API.baseUrl}forecast?q=${passedSearch.name}&units=metric&appid=${API.key}`
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

  // if (forecastData != null && ctr == 0) {
  //   ctr = ctr + 1;
  // }
  list.forEach((element) => {
    return <ForecastCard props={element} />;
  });
}

export default ForecastDataMain;
//`${API.baseUrl}forecast?q=${passedSearch}&units=metric&appid=${API.key}`
