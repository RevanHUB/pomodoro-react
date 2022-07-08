
import './css/App.css';
import Header from './components/header'
import React, { useState, useEffect } from "react";


const Scrollable = (props) => {
  // console.log(props)
  return (
    <div className="scrollable" id={props.sectionTitle}>
      <div className="pomodore" style={(props.theme === "dark")
    ? {
      // black theme
      backgroundColor: "#1E2140",
      color: "white"
    }
    : {
      // white theme
      backgroundColor: "#f2f2f2",
      color: "black"
    }
    
    }>
      <svg className="pomodoreBar" width="100%" height="100%" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="46%" fill="none" stroke="" stroke-width="5" stroke-dashoffset="10" stroke-linecap='round' />
        <circle cx="60" cy="60" r="46%" fill="none" stroke="#F17475" stroke-width="2" stroke-linecap='round' stroke-dasharray="100" stroke-dashoffset={(props.countdown === true)?(100 + (props.seconds * 100 / 60) ): (100 - (props.seconds * 100 / 60) )  } pathLength="100" />
      </svg>
      
      <h1> {props.minutes} : {props.seconds} </h1>
      </div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState("dark");
  const [timer, setTimer]  = useState(true);
  const [countdown, setCountdown]  = useState(false);
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  var [Min, setMin] = useState(0);

  
  useEffect(() => {
   if(start === true) {
    const pomodore = setInterval(() => {
      if (seconds >= 59) {
        setMin(Min+1)
        setSeconds(0)
        console.log(seconds)
      } else {
        setSeconds(seconds => seconds + 1);
      }
      
    }, 1000);
    return () => clearInterval(pomodore);}
    
    if(countdown === true) {
      
      const cdpomodore = setInterval(() => {

         if (seconds === 0) {
          setMin(Min-1);
          setSeconds(59);
        } else   {
          setSeconds(seconds => seconds - 1)};
           
      }, 1000);
      return () => clearInterval(cdpomodore);}
      
   
  })

  

 
  return (
    <div className="App" style={(theme === "dark")
    ? {
      // black theme
      backgroundColor: "#1E2140",
      color: "white"
    }
    : {
      // white theme
      backgroundColor: "#f2f2f2",
      color: "black"
    }
    
    }>
      <Header 
        title="Pomodoro"
        theme={theme}
        setTheme={setTheme}
        start={start}
        setStart={setStart}
        setSeconds={setSeconds}
        setMin={setMin}
        setTimer={setTimer}
        countdown = {countdown}
        setCountdown={setCountdown}
      />{
        (timer === true)? <Scrollable sectionTitle = {theme} seconds = {(seconds < 10) ? "0" + seconds : seconds} minutes = {Min} theme = {theme}/> : null
      }
    </div>
  );
}

export default App;
