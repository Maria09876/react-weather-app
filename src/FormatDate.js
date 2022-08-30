import React from "react";

export default function FormatDate(props) {

    let days=["Sunday", "Monday","Tuesday", "Wednesday", "Thursday","Friday","Saturday"]
    let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
    ];

    let currentDay = days[props.date.getUTCDay()];//the number from the props.date.getDay will be replaced by the day of the week that holds the position of that number
    let month = months[props.date.getUTCMonth()];
    let date = props.date.getUTCDate();
    let hours = props.date.getUTCHours() 

    if (hours < 10) {
        hours=`0${hours}`
    }
    let minutes=props.date.getUTCMinutes()
    if (minutes < 10) {
        minutes=`0${minutes}`
    }

    return (
        <div className="row">
            <div className="col-6">
                {currentDay}  {date}, {month}
            </div>
             <div className="col-6">
                {hours}:{minutes}
            </div>                          
        </div>
    )
}
