import { useState } from "react"

const UseState4 = () => {

    const [inputValue, setInputValue] = useState("");
    // const [range, setRange] = useState(30);

    const handleNumber = (event) => {
        const value = Math.max(0, Math.min(100, event.target.value))
        setInputValue(value)
    }

  return (
    <div>
      <h1>Progress bar</h1>
      <div className="progress">
        <div className="progress-bar" style={{ width : `${inputValue}%`}}></div>
        <input type="range"   value={inputValue}
        onChange={handleNumber} />
        <br />
        <label>Input Percentage :</label>
        <input 
        type="number"  
        value={inputValue} 
        onChange={handleNumber}/>
      </div>
    </div>
  )
}

export default UseState4
