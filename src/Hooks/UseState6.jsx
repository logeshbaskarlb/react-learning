import { useEffect, useState } from "react"

const UseState6 = () => {

    const [timer, setTimer] = useState(10)
    const [increment, setIncrement] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            if(timer > 0 ) {
                setTimer(timer - 1)
            }else {
                setTimer(10)
            }
        }, 1000);
        return () => clearInterval(interval)
    },[timer])

    const handleIncrement  = () => {
            setIncrement(increment + 1); // Increment by 1 otherwise
        }
    
  return (
    <div>
        <h2>Timer : {timer}</h2>
      <h3>
        {increment}
        </h3>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default UseState6
