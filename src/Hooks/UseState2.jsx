import { useEffect, useRef, useState } from "react";

const UseState2 = () => {

    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const timeRef = useRef(null);
 
    useEffect(()=>{
        if(isActive){
            timeRef.current = setInterval(()=>{
                setTime((prevTime) => prevTime + 10)
            },10)
        }else {
            clearInterval(timeRef.current)
        }
        return () => clearInterval(timeRef.current);
    },[isActive]);
    
    const handleStart = () => {
        setIsActive(true)
      };
    
    const handleStop = () => {
        setIsActive(false)
      };
    
    const handleReset = () => {
        setIsActive(false)
        setTime(0)
      };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
       <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
       <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
       <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
        {
            !isActive && time === 0 && (
                <button onClick={handleStart}>Start</button>
            )
        }
        {isActive && <button onClick={handleStop}>Stop</button>}
        {!isActive && time !== 0 && <button onClick={handleStart}>Resume</button>}
        <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>pause</button>
      <button onClick={handleReset}>Reset</button> */}
    </div>
  )
}

export default UseState2
