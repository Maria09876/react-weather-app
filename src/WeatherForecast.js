import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import { ThreeDots } from  'react-loader-spinner';

import axios from "axios";


export default function WeatherForecast(props){

const [loaded, setLoaded]=useState(false);
const [forecast, setForecast]=useState(null);

useEffect(()=>{
    setLoaded(false)
}, [props.coordinates]);


    function showResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);        
    }


if (loaded){
   return (
    <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                return(
                  <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast}/>  
            </div>  
                )                
            })}
            
        </div>
    </div>
       
    ) 
} else{
    let longitude= props.data.coordinates.lon;
    let latitude= props.data.coordinates.lat;
    let apiKey="580b4ceb3ca68db62c21905fc5fdc423";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);

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