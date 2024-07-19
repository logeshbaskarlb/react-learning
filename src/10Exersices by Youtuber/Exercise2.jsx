// Different between useEffect and uselayout?

import { useLayoutEffect, useRef, useState } from "react"

// A useEffect runs asynchronously after the paint has been committed to the screen,
// while a useLayoutEffect runs synchronously before the paint has been
// committed to the screen. This means useLayoutEffect can block the visual update, 
// which is uesful foe measuring layout or updating the DOM before the browser 
// paints


const Exercise2 = () => {

    const [width, setWidth] = useState(0);
    const boxRef = useRef(null);

    useLayoutEffect(()=>{
        if(boxRef.current){
            const boxWidth = boxRef.current.getBoundingClientRect().width;
            setWidth(boxWidth);
         }
    },[])
  return (
    <div>
      <div ref={boxRef}
      style={{
        width: '50%',
        height: '100px',
        backgroundColor: 'lightblue',
        margin: '20px auto'
      }}>
        This is 50% of the container&apos;s width
      </div>
      <p>The box width is : {width}px</p>.
    </div>
  )
}

export default Exercise2
