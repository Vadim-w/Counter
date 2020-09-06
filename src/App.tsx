import React, {useState} from 'react';
import './App.css';
import {Counter} from './CounterBlock/Counter';


export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}





function App() {
    let [counter, setCounter] = useState(0)
    let [startValue, setStartValue] = useState(restoreState("startValue", "0"))
    let [maxValue, setMaxValue] = useState(restoreState("maxValue", "1"))
    let [error, setError] = useState(false)
    let [settingsOn, setSettingsOn] = useState(false)


    const changeStartValue = (value: string) => {
        if (+(value) < 0 || +(value) >= +(maxValue)) {
            setError(true)
            setSettingsOn(true)
        }
        else {
            setError(false)
        }
        setStartValue(value)
        setSettingsOn(false)
    }

    const changeMaxValue = (value: string) => {
        if (+(value) < 0 || +(startValue) >= +(value)) {
            setError(true)
            setSettingsOn(true)
        }
        else {
            setError(false)
        }
        setMaxValue(value)
        setSettingsOn(false)
    }

    const addCounter = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(0)
        setSettingsOn(false)
    }

    const applySettings = () => {
        setCounter(+(startValue))
        setMaxValue(maxValue)
        setSettingsOn(true)
        saveState("startValue", +(startValue))
        saveState("maxValue", maxValue)
    }


    return (
        <div className="App">
            <Counter addCounter={addCounter}
                     counter={counter}
                     reset={resetCounter}
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
