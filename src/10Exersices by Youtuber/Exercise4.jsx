
// what is  reconciliation process work?

import { useEffect, useState } from "react"



const Exercise4 = () => {


  const [text, setText] = useState("")
  useEffect(()=>{
    setText("Hello, World!")
  },[])
  
  return (
    <>
   <h2> what is  reconciliation process work?</h2>
   <h3>{text}</h3>
   {/* <img src="" href="hel" alt="" /> */}
    </>   
  )
}

export default Exercise4
