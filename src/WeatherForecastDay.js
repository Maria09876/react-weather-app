import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    
 return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36}/>
            <div className="forecast-temperature">
                <span className="min-temperature"> {minTemp()}</span>
                <span className="max-temperature">{maxTemp()}</span>  
            </div>
            </div>
           
    )

    function maxTemp(){
        let max=Math.round(props.data.temp.max);
        return `${max}°`
    }
    function minTemp(){
        let min= Math.round(props.data.temp.min);
        return `${min}°`
    }



function day(){
    
    let date = new Date(props.data.dt*1000); //sets the day(time)based on the properties sent by WeatherForecast, multiplied by 1000 because it is milliseconds
    let day = date.getDay(); //gets the day of the date
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day]; //returns the days of the day
}

}
   
