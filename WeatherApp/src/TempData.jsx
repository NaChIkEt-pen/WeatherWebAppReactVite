import React from "react";
import { ReactDOM } from "react";

function TempData({ passedTemp }) {
  if (passedTemp != "") {
    return (
      <div>
        <h1>{passedTemp} °C</h1>
      </div>
    );
  }
}

export default TempData;
