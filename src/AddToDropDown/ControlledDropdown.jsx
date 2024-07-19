import { useState } from "react"

const ControlledDropdown = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' }
    ];

    const handleClick = (event)=>{
        setSelectedValue(event.target.value);
    };

  return (
    <div>
      <select name="selct" value={ selectedValue } onChange={handleClick}>
        <option value="" disabled>Select an option</option>
        {
            options.map((option)=>(
                <option key={option.id} value={option.id} >
                    {option.name}
                </option>
            ))
        }
      </select>
      <p>Selected Value : { selectedValue }</p>
    </div>
  )
}

export default ControlledDropdown
