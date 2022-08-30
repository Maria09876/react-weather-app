import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props){
    return (
        <div>
        <h1>{props.data.city},  { props.data.country}</h1>
                <ul>
                    <li><FormatDate date={props.data.date} /></li> 
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>

                <div className="row">
                    <div className="col-6">
                        <img src="http://openweathermap.org/img/wn/{props.data.icon}@2x.png" alt={props.data.description} />
                        <span className="temperature">{Math.round(props.data.temperature)}</span> °
                        <span className="unit">C</span>
                    </div>
                
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: {props.data.precipitation}%</li>
                            <li>Humidity:{ props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}km/h</li>
                            <li>UV-Level:Low</li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}