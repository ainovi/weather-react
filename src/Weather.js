import React from "react";

export default function Weather() {
  return (
    <div className="row">
      <div className="col-6">
        <img
          className="float-left"
          id="icon"
          alt="imageMain"
          //className="main-image"
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        />
      </div>
      <strong className="main-temp" id="temperature"></strong>
      <div className="units">°C / °F</div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span>km/h
          </li>
        </ul>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
