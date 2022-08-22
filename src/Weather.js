import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form className="Search">
                <div className="row">
                <div className="col-8">
                <input type="search" placeholder="Type a city..." className="form-control"/>
                </div>
                <div className="col-4">
                 <input type="submit" value="Search" className="btn btn-light" />   
                </div> 
                </div>    
            </form>
            <h1>Tilburg</h1>
            <ul>
                <li>Monday 9:00</li>
                <li>Clear Sky</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"/>
                </div>
                20°C
                <div className="col-6">
                <ul>
                        <li>Precipitation: 20%</li>
                        <li>Humidity:50%</li>
                        <li>Wind:5km/h</li>
                        <li>UV-Level:Low</li>
                </ul>
                </div>
            </div>






    </div>
)
}