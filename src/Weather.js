import React, { useState } from "react";
import { ThreeDots } from  'react-loader-spinner'
import "./Weather.css";
import axios from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            maxTemp: response.data.main.temp_max,
            minTemp: response.data.main.temp_min,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            visibility: response.data.visibility,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            precipitation: response.data.rain,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset,
            icon: response.data.weather[0].icon,
            date: "Monday 22, Aug 11.00"
        });
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form className="Search">
                    <div className="row">
                        <div className="col-8">
                            <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-4">
                            <input type="submit" value="Search" className="btn btn-light w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city},  { weatherData.country}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>

                <div className="row">
                    <div className="col-6">
                        <img src="http://openweathermap.org/img/wn/{weatherData.icon}@2x.png" alt={weatherData.description} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span> °
                        <span className="unit">C</span>
                    </div>
                
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: {weatherData.precipitation}%</li>
                            <li>Humidity:{ weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind}km/h</li>
                            <li>UV-Level:Low</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "f3b72f65f46b84b8e79b5ce613a7a232";
        let city = "London"
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);


        return (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#54BAB9" 
        ariaLabel="three-dots-loading"
        visible={true}
        />
        )  
    }
}