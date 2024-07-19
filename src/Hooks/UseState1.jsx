import { useState } from "react"

const UseState1 = () => {

    const [hide, setHide] = useState(null)

    const handleHide = () =>{
        setHide(!hide)
    }

  return (
    <div>
        <h3>Hide data using useState</h3>
        { hide &&
            <p>This is the paragraph to hide when toggled</p>
        }
        <button onClick={handleHide}>{hide ? "Hide" : "Seek"}</button>
    </div>
  )
}

export default UseState1
