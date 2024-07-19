import { useState } from "react"

const TodoApp = () => {
    const [add, setadd] = useState([])
    const handleCick = () =>{

    }
  return (
    <div>
      <h1 className="">Todo App</h1>
      <form>
        <div>
            <label htmlFor="">
                Topic :
            </label><br />
            <input type="text"  />
        </div>
        <div>
            <label htmlFor="">
                Describe :
            </label><br />
            <textarea type="text"  />
        </div>
        <button onClick={handleCick}>Submit</button>
      </form>
    </div>
  )
}

export default TodoApp
