import { useCallback, useEffect, useState } from "react"
import { debounce } from 'lodash';

const TextInAnotherInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [debouncedValue,setDebouncedValue] = useState("")

    const handleInputchange =(event)=>{
        setInputValue(event.target.value);
        
    }

    const debouncedChangeHandler = useCallback(
      debounce((value)=> {
        setDebouncedValue(value)
      },300),[]
    )

    useEffect(()=>{
      debouncedChangeHandler(inputValue)
      return () =>{
        debouncedChangeHandler.cancel()
      }
    },[inputValue, debouncedChangeHandler])

  return (
    <div>
      <input 
      type="text" 
      value={inputValue} 
      onChange={handleInputchange} />
      <br />
      <br />
      <input type="text"
      value={debouncedValue}
      readOnly />
    </div>
  )
}

export default TextInAnotherInput
