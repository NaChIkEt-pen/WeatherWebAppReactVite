import React from "react";
import { ReactDOM } from "react";
import "./CSS/TitleSubtitle.css";
function TitleSubtitle({ passedData }) {
  const dateData = new Date(
    passedData[1].dt * 1000 - passedData[1].timezone * 1000
  );
  const date = `${dateData.getDate()}-${dateData.getMonth()}-${dateData.getFullYear()}`;
  //console.log(date);
  if (date == "NaN-NaN-NaN") {
    return (
      <>
        <div className="CityDateDiv">
          <h2>{passedData[0]}</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="CityDateDiv">
          <h1 className="cityName">{passedData[0]}</h1>
          <h5 className="date">{date}</h5>
        </div>
      </>
    );
  }
}

export default TitleSubtitle;
