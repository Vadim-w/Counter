import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './CounterBlock/Counter';

function App() {
    let [counter, setCounter] = useState(0)
    let [maxValue, setMaxValue] = useState(0)

    function addCounter() {
        setCounter(counter + 1)
    }
    function reset() {
        setCounter(0)
    }

    function applySettings(start: number, max: number) {
        debugger;
        setCounter(start)
        setMaxValue(max)

    }

    return (
        <div className="App">
            <Counter addCounter={addCounter}
                     counter={counter}
                     reset={reset}
                     applySettings={applySettings}
                     maxValue={maxValue}
            />
        </div>
    );
}

export default App;
