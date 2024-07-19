import { useState } from "react"

const ConditionalRender = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
     {
        isLoggedIn ? (
            <div> 
                <button onClick={()=>setIsLoggedIn(false)}>
                    Logout
                </button>
                <p>Welcome Back</p>
            </div> 
        ) : (<div>
            <button onClick={()=> setIsLoggedIn(true)}>Login</button>
            <p>Please Login in.</p>
        </div>)
     } 
    </div>
  )
}

export default ConditionalRender
