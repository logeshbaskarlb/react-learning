import { useState } from "react"

const UseState3Todo = () => {

    const [todo, setTodo] = useState([])
    const [inputValue, setInputValue] = useState("")

    const handleInput = (event) =>{
        setInputValue(event.target.value)
    }
    const addItems = () =>{
       setTodo([...todo, inputValue])
       setInputValue("")
    }
    const removeItem = () =>{
        setTodo(todo.filter((item, index) => index !== todo.length - 1))

    }
  return (
    <div>
     <h1>Todo</h1>
      <input 
      type="text"
      placeholder="Type list item"
      value={inputValue}
      onChange={handleInput}/>
      <button onClick={addItems}>Add</button>
    {
        todo?.map((data) => (
            <div key={data.id} style={{ display: "flex" }}>
                <li style={{listStyle : "none"  }}>{data}</li>
                <button onClick={removeItem}>X</button>          
            </div>
        ))
    }
    </div>
  )
}

export default UseState3Todo
