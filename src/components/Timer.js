import React, {useState, useEffect} from 'react'
import useRandomColor from './RandomColor';


function Timer() {
    const {color, generateColor} = useRandomColor()
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
function toggle (){
    setIsActive(!isActive);
    if (!isActive) {
        document.getElementById("start").innerHTML = "";
        document.getElementById("start").innerHTML = "Pause";
    } else {
        document.getElementById("start").innerHTML = "";
        document.getElementById("start").innerHTML = "Start";
    }
}
function reset(){
    setSeconds(0);
    setIsActive(false);
    if (document.getElementById("start").innerHTML === "Pause") {
        document.getElementById("start").innerHTML = "";
        document.getElementById("start").innerHTML = "Start";
    }
}
useEffect (() => {
    let interval = null;
    if (isActive)
    {
        interval =setInterval(() => {
            setSeconds(seconds => seconds + 1)
            generateColor()
        }, 1000);
        
    }
    else if (!isActive && seconds !== 0){
        clearInterval(interval)
        
    }
    return () => clearInterval(interval)
},[isActive,seconds])

  return (
    
    <div style={{backgroundColor:"#"+ color}}>
        
        <div>
           {seconds} 
        </div>
      <button onClick={toggle} id="start">Start</button>
      <button onClick={reset} id="reset">Reset</button>
      <button onClick={generateColor}>Generate Random Color</button>
    </div>
  )
}

export default Timer
