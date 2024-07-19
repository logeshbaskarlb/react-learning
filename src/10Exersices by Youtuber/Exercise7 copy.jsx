// Explain the concept of "lifting state up" in React.


// "Lifting state up" refers to moving the state to the nearest common ancestor component 
// when multiple components need to share and manage the same state. This ensures that the 
// state is centralized and can be passed down as props to the child components, promoting 
// better state management and communication between components.


import { useState } from 'react';

function CelsiusInput(props) {
  const { celsius, handleChangeCelsius } = props;

  return (
    <div>
      <label>Celsius: </label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => handleChangeCelsius(e.target.value)}
      />
    </div>
  );
}

function FahrenheitInput(props) {
  const { fahrenheit } = props;

  return (
    <div>
      <label>Fahrenheit: </label>
      <input type="text" value={fahrenheit} disabled />
    </div>
  );
}

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);

  const handleChangeCelsius = (newCelsius) => {
    setCelsius(parseFloat(newCelsius));
  };

  const fahrenheit = (celsius * (9 / 5)) + 32;

  return (
    <div>
      <CelsiusInput celsius={celsius} handleChangeCelsius={handleChangeCelsius} />
      <FahrenheitInput fahrenheit={fahrenheit.toFixed(2)} />
    </div>
  );
}

export default TemperatureConverter;