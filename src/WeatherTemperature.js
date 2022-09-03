import React, {useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit]=useState("celsius")


    function showCelsius(){        
        return (
            <div>
                {Math.round(props.celsius)}
            </div>
        )
    }

    function showFahreneit(event){
        event.preventDefault()
        setUnit("fahreneit")
    }

    function fahreneit(){
        return (props.celsius*9)/5+32;
    }

    

    if (unit === "celsius"){
        return (        
        <div className="temperature">
        {Math.round(props.celsius)} °
        <span className="unit"> C | <a href="/" onClick={showFahreneit}>F</a> </span>
        </div>
    )

    } else {
        return (        
            <div className="temperature">
            {Math.round(fahreneit())} °
            <span className="unit"> <a href="/" onClick={showCelsius}>C</a> | F </span>
            </div>
        )
    }


    
}