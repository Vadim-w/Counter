import React from 'react';
import {Buttons} from './Buttons';
import {Screen} from "./Screen";

type counterType = {
    addCounter: () => void
    counter: number
    reset: () => void
}

export const Counter: React.FC<counterType> = (props) => {
    return (<div className={"commonBlock"}>
            <div className={"settingsBlock"}></div>
            <div className={"counter"}>
                <Buttons addCounter={props.addCounter} reset={props.reset} countre={props.counter}/>
                <Screen countre={props.counter}/>
            </div>
        </div>
    )
}