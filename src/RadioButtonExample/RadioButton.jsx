import { useState } from "react"

const RadioButton = () => {

    const [selectedvalue, setSelectedValue] = useState("");
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event)=>{
        setSelectedValue(event.target.value)
    }
  return (
    <div>
      <h1>Radio button</h1>
      {
        options.map((option,index)=>(
          <div key={index}>
            <input 
            type="radio" 
            name="options" 
            id={option} 
            value={option}
            checked={selectedvalue === option} 
            onChange={handleChange}/>
            <label htmlFor={option}>{option}</label>
          </div>  
        )   )
      }
       <p>Selected Value: {selectedvalue}</p>
    </div>
  )
}

export default RadioButton
