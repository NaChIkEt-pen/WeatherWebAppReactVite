import React from "react";
import { ReactDOM } from "react";
import "./CSS/WeatherIcon.css";
function WeatherIcon({ passedIcon }) {
  if (passedIcon == "") return null;
  else {
    const imageUrl = `https://openweathermap.org/img/wn/${passedIcon}@2x.png`;
    return (
      <div className="IonDescDiv">
        <img src={imageUrl} />
      </div>
    );
  }
}

export default WeatherIcon;
