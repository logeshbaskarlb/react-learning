import { useEffect } from "react";
import { useState } from "react"

const Exercise1 = () => {

const [counter , setCounter] = useState(0);

useEffect(()=>{
    const interval = setInterval(()=>{
        setCounter(counter + 1)
    },1000) 
    return ()=> clearInterval(interval)
},[])

  return (
    <div>
      <h2>Count : {counter}</h2>
    </div>
  )
}

export default Exercise1
