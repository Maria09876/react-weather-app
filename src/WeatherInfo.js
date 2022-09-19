import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div>
            <div className="row topContainer">
                <div className="row">

                    <div className="col-9">

                        <div className="col">
                            <h1>{props.data.city},  { props.data.country}</h1>
                        </div>

                        <div className="row">
                            <span className="text-muted m-2">
                            <FormatDate date={props.data.date} />
                            </span>                
                        </div>

                        <div className="row currentWeather p-1">

                            <div className="col">
                                <WeatherTemperature celsius={props.data.temperature}/>
                                <p className="text-capitalize">{props.data.description}</p>
                            </div>

                            <div className="col">
                                <div className="float-left">
                                     <WeatherIcon code={props.data.icon} size={57}/>
                                </div>                         
                            </div>

                            <div className="col">
                                15°/25°
                            </div>
                            <div className="col">
                                <div>
                                  Feels like
                                </div>
                                <span>18°</span>                                
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <ul>
                            <li>Humidity: { props.data.humidity}%</li>
                            <li>Wind: {props.data.wind}km/h</li>
                        </ul>
                    </div>
                    
                </div>
             </div>
          </div>
    )
}