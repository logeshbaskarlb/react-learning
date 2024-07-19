import { useState } from "react"

const Exercise7 = () => {

  const [count, setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={increment}>
        increment
      </button>
      <button onClick={()=> setCount(count + 1)}>
        increment
      </button>
      {count}
    </div>
  )
}

export default Exercise7
