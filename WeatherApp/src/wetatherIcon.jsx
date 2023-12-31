import React from "react";
import { ReactDOM } from "react";

function WeatherIcon({ passedIcon }) {
  if (passedIcon == "") return null;
  else {
    const imageUrl = `https://openweathermap.org/img/wn/${passedIcon}@2x.png`;
    return (
      <>
        <img src={imageUrl} />
      </>
    );
  }
}

export default WeatherIcon;
