import React from "react";

export default function WeatherForecastDay(props){

let minTemp= Math.round(props.data.temp.min);
let maxTemp=Math.round(props.data.temp.max);

function day(){
    
    let date = new Date(props.data.dt*1000); //sets the day(time)based on the properties sent by WeatherForecast, multiplied by 1000 because it is milliseconds
    let day = date.getDate(); //gets the day of the month based on the time from the dt

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day]; //returns the days of the day
}

    return (
        <div>
            <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">{day()}</div>
                    <img src={props.data.icon} alt={props.data.description}/>
                    <div className="forecast-temperature">
                      <span className="min-temperature"> {minTemp}</span>°
                      <span className="max-temperature">{maxTemp}</span>°  
                    </div>
                 </div>
            </div>
        </div>
        </div>
    )
}