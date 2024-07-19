
const KeysAndValues = () => {


    const person = {
        name: 'John Doe',
        age: 30,
        occupation: 'Engineer',
        city: 'San Francisco'
      };

  return (
    <div>
      {
        Object.keys(person).map((key)=>(
            <li key={key}>
                {key}:  
                {person[key]}
             </li>
        ))
      }
    </div>
  )
}

export default KeysAndValues
