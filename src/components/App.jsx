import {useState} from "react";
import PlanetInfo from "./PlanetInfo";

const App = () => {
  const [counterValue, setCounterValue] = useState(1);

  const incCounterValue = () => {
    setCounterValue((prevState) => prevState + 1);
  }

  return (
    <div className='wrapper'>
      <h3>{counterValue}</h3>
      <button onClick={incCounterValue}>+</button>

      <PlanetInfo id={counterValue}/>
    </div>
  )
}

export default App;
