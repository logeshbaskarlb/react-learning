import { useEffect, useRef, useState } from "react"

const UseWebWorker = () => {

    const [result, setResult] = useState(null);
    const workerRef = useRef(null)

    useEffect(()=>{
        workerRef.current = new Worker(new URL('./myWorker.js', import.meta.url))

        workerRef.current.onmessage = (e) => {
            setResult(e.data);
        }
        return () => {
            workerRef.current.terminate()
        }
    },[])

    const handleWork = () =>{
        workerRef.current.postMessage(42)
    }

  return (
    <div>
      <button onClick={handleWork}>Start work</button>
      <p>Result :{result}</p>
    </div>
  )
}

export default UseWebWorker
