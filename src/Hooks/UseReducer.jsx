import { useReducer } from "react"


const UseReducer = () => {
    
    const initialState = { 
      count : 0
    }
    
    const reducer = (state, action) =>{
        switch(action.type) {
            case 'INCREMENT':
                return { count : state.count + 1 }
            case 'DECREMENT':
                return { count : state.count - 1 }
            default :
                return state;
            }
        }

    const [state, dipatch ] = useReducer(reducer,initialState);


  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={()=>dipatch({ type : "INCREMENT" })}>Increment</button>
      <button onClick={()=>dipatch({ type : "DECREMENT" })}>Decrement</button>
    </div>
  )
}

export default UseReducer
