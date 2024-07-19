import { useState } from "react"

const UseState5 = () => {

    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState({
        username :"",
        lastname : "",
        age : ""
    })

    const handleInputBox = (event) =>{
        const { name , value } = event.target;
        setInputValue({ ...inputValue, [name] : value })
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        setData([...data,inputValue ])
        setInputValue({
            username :"",
            lastname : "",
            age : ""
        })
    } 

  return (
    <div>
        <h1>Form submit</h1>
      <form action="" >
        <label>Username:</label>
        <input type="text" placeholder="Username" name="username" value={inputValue.username} onChange={handleInputBox}/>
        <br />
        <label >Fullname:</label>
        <input type="text" placeholder="Fullname" name="lastname" value={inputValue.lastname} onChange={handleInputBox}/>
        <br />
        <label >Age:</label>
        <input type="age" placeholder="Age" name="age" 
        value={inputValue.age} onChange={handleInputBox}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>

    {
    data?.map((data)=> (
        <div key={data.id}>
           <p>Username : {data.username}</p>
           <p>Fullname : {data.lastname}</p>
           <p>Age : {data.age}</p>
        </div>
    ))
    }

    </div>
  )
}

export default UseState5
