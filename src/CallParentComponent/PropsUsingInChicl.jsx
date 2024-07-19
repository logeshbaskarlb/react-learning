
const PropsUsingInChicl = ({ updateparentMessage }) => {

    const handleClick = ()=>{
      updateparentMessage ("Message udated by child component")
    }
  return (
    <>
      <button onClick={handleClick}>Update Parent message</button>
    </>
  )
}

export default PropsUsingInChicl

// Key Points
// Define the method you want to call in the parent component.
// Pass the method to the child component as a prop.
// In the child component, call the method via the prop.