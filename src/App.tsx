import React, {useState} from 'react';
import './App.css';
import { Counter } from './Counter';

 function App() {
    let [counter, setCounter] = useState(0)

     function addCounter() {

        setCounter(counter+1)
    }
    function reset() {
        setCounter(0)
    }

  return (
    <div className="App">
        <Counter addCountre={addCounter}
                 countre={counter}
                 reset={reset}
        />
    </div>
  );
}

export default App;
