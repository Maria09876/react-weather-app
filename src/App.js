import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container m-4 p-5">
      <Weather defaultCity="Tilburg"/>

      <footer>
        This project was created by{""}<a href='https://www.mariaefthymiou.com/' target='_blank' rel="noopener noreferrer" > Maria Efthymiou</a>,{""} it is {""}<a href='https://github.com/Maria09876/react-weather-app' target='_blank' rel="noopener noreferrer" > open sourced on Github </a>{""}and {""}<a href="https://capable-travesseiro-af5cb0.netlify.app/" target='_blank' rel="noopener noreferrer"> hosted on Netlify</a> . 
      </footer>
      </div>
    </div>
  );
}

export default App;
