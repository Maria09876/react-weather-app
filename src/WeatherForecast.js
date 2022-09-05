import React from "react";
import "./WeatherForecast.css";


export default function WeatherForecast(props){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">MON</div>
                    <img src={props.data.icon} alt={props.data.description}/>
                    <div className="forecast-temperature">
                      <span className="min-temperature"> 18 </span>°
                      <span className="max-temperature">25</span>°  
                    </div>
                 </div>
            </div>
        </div>
    )
}