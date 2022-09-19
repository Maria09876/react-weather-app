import React, { useState } from "react";
import { ThreeDots } from  'react-loader-spinner'
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";


export default function Weather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    const [city , setCity]=useState(props.defaultCity)
    
    
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            city: response.data.name,
            coordinates:response.data.coord,
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
            timezone: response.data.timezone,
            date: new Date((response.data.dt + response.data.timezone)*1000)
        });
        setReady(true);
    }

    function Search(){
        const apiKey = "f3b72f65f46b84b8e79b5ce613a7a232";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault()
        Search()
    }

    function handleCityChange(event){
        setCity(event.target.value)
    }

    if (ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                        </div>
                        <div className="col-4">
                            <input type="submit" value="Search" className="btn btn-light w-100" />
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast data= {weatherData}/>
                
             </div>
        );
    } else {
        Search();


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