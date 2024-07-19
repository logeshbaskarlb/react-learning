
// import Exercise1 from './10Exersices by Youtuber/Exercise1'
// import Exercise2 from './10Exersices by Youtuber/Exercise2'
// import Exercise3 from './10Exersices by Youtuber/Exercise3'
// import Exercise4 from './10Exersices by Youtuber/Exercise4'
// import Exercise5 from './10Exersices by Youtuber/Exercise5'
// import Exercise7 from './10Exersices by Youtuber/Exercise7'
// import './App.css'
// import UseState1 from './Hooks/UseState1'
// import UseState2 from './Hooks/UseState2'
// import UseState3Todo from './Hooks/UseState3-Todo'
// import UseState4 from './Hooks/UseState4'
// import UseState5 from './Hooks/UseState5'
// import UseState6 from './Hooks/UseState6'
// import DynamicData from './Dynamic-data/DynamicData'
// import PropsUsing from './Props-Usage/PropsUsing'
// import { lazy,
  //  useState 
  // } from 'react'
// import PropsUsingInChicl from './CallParentComponent/PropsUsingInChicl'
// import UseRef from './AccessingDom/UseRef'
// import ControlledDropdown from './AddToDropDown/ControlledDropdown'
// import { Suspense } from 'react'
// import TextInAnotherInput from './TextInAnother/TextInAnotherInput'
// import ConditionalRender from './ConditionalRendering/ConditionalRender'
// import RadioButton from './RadioButtonExample/RadioButton'
// import KeysAndValues from './KeysAndVaalues/KeysAndValues'
// import SearchInput from './SearchInput/SearchInput'
// import UseWebWorker from './WebWorkers/UseWebWorker'
// import FormWithoutYup from './Form/formWithoutYup/FormWithoutYup'

import TodoApp from "./TodoApp/TodoApp"

// const LazyComponent = lazy(()=> import('./Lazyloading/LazyComponent'))

function App() {

  // const [show,setShow] = useState(false);

  // const [message, setMessage] = useState("Hello from parent")

  // const updateMessage = (newMessage) =>{
  //   setMessage(newMessage)
  // }

  return (
    <div className=' main'>
    
    {/* <h1 className='label'> Level-1</h1>
    <DynamicData />
    <hr />
    
    <h1 className='label'> Level-2</h1>
    <PropsUsing name={"Logesh"} 
    email={"logeshbaskar007@gmail.com"} 
    status={"Single"} />
    <hr />
    
    <h1 className='label'> Level-3</h1>
    {message} <br />
    <PropsUsingInChicl updateparentMessage={updateMessage} />
    <hr />
    
    <h1 className='label'> Level-4</h1>
    <b>Using Ref</b>
    <UseRef />
    <hr />

    <h1 className='label'> Level-5</h1>
    <ControlledDropdown />
    <hr />

    <h1 className='label'> Level-6</h1>
    <h1>React lazy loading example</h1>
    <button onClick={()=> setShow(!show)}>
      {show ? 'Hide' : 'Show'} Lazy Loading
    </button>
    <Suspense fallback={<div>Loading....</div>}>
      {
    show &&
    <LazyComponent />
      }
    </Suspense>
    <hr />

    <h1 className='label'> Level-7</h1>
    <TextInAnotherInput />
    <hr />

    <h1 className='label'> Level-8</h1>
    <ConditionalRender />
    <hr />

    <h1 className='label'> Level-9 </h1>
   <RadioButton />
    <hr />

    <h1 className='label'> Level-10</h1>
   <KeysAndValues />
    <hr />

    <h1 className='label'> Level-11</h1>
   <SearchInput />
    <hr />

    <h1 className='label'> Level-12</h1>
   <UseWebWorker />
    <hr /> */}


      {/* <FormWithoutYup /> */}
     
     {/* <h1>Hooks Test</h1>
      <UseState1 />
      <hr />
      <UseState2 />
      <hr />
      <UseState3Todo />
      <hr />
      <UseState4 />
      <hr />
      <UseState5 />
      <hr />
      <UseState6 /> */}
      <TodoApp />
    </div>
  )
}

export default App
