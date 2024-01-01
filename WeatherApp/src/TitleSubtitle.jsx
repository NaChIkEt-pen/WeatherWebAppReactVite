import React from "react";
import { ReactDOM } from "react";
import "./CSS/TitleSubtitle.css";
function TitleSubtitle({ passedData }) {
  const dateData = new Date(
    passedData[1].dt * 1000 - passedData[1].timezone * 1000
  );
  //const date = `${dateData.get()}-${dateData.getMonth()}-${dateData.getFullYear()}`;
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = dateData.toLocaleDateString("en-IN", options);
  //console.log(date);
  if (Number.isNaN(dateData.getTime())) {
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
          <h5 className="date">{formattedDate}</h5>
        </div>
      </>
    );
  }
}

export default TitleSubtitle;
