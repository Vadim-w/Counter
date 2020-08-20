import React, { useState} from 'react';
import './App.css';
import {Counter} from './CounterBlock/Counter';

function App() {
    let [counter, setCounter] = useState(0)
    let [startValue, setStartValue] = useState("0")
    let [maxValue, setMaxValue] = useState("0")
    let [error, setError] = useState(false)
    let [settingsOn, setSettingsOn] = useState(false)



    const changeStartValue = (value: string) => {
        if(+(value) < 0 ) {
            setError(true)
            setSettingsOn(true)
        }
        else {setError(false)}
        setStartValue(value)
        setSettingsOn(false)
    }

    const changeMaxValue = (value: string) => {
        if(+(value) < 0 ) {
            setError(true)
            setSettingsOn(true)
        }
        else {setError(false)}
        setMaxValue(value)
        setSettingsOn(false)
    }

    const addCounter = () =>  {
        setCounter(counter + 1)
    }
    const reset = () => {
        setCounter(0)
    }

    const applySettings = () => {
        setCounter(+(startValue))
        setMaxValue(maxValue)
        setSettingsOn(true)
    }


    return (
        <div className="App">
            <Counter addCounter={addCounter}
                     counter={counter}
                     reset={reset}
                     applySettings={applySettings}
                     startValue={startValue}
                     maxValue={maxValue}
                     error={error}
                     changeStartValue={changeStartValue}
                     changeMaxValue={changeMaxValue}
                     settingsOn={settingsOn}

            />
        </div>
    );
}

export default App;
