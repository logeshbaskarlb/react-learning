// useRef




import { useEffect, useRef, useState } from "react"

const UseRef = () => {

    const myRef = useRef(null)

    useEffect(()=>{
        // console.log(myRef.current);
        myRef.current.focus();
    },[])

    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args){
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
      },delay)
    }
  }

  const debouncedOnSearch = debounce((event)=>{
    console.log(event.target.value);
  })
  
  const handleChange = (event) =>{
    setInputValue(event.target.value);
    debouncedOnSearch(event);
  }

  return (
    <div>
      <input type="text" 
             value={inputValue}
             onChange={handleChange}
             ref={myRef} />
      <h1>
        Render Count: {count.current}
      </h1>
    </div>
  )
}

export default UseRef
