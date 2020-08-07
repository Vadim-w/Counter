import React from 'react';
import {Buttons} from './Buttons';
import {Screen} from "./Screen";
import {ScreenSettings} from "../SettingsCounterBlock/ScreenSettings";

type counterType = {
    addCounter: () => void
    counter: number
    reset: () => void
    applySettings: (start: number, max: number) => void
    maxValue: number
}

export const Counter: React.FC<counterType> = (props) => {
    return (<div className={"commonBlock"}>
            <div className={"settingsBlock"}>
                <div>
                <ScreenSettings applySettings={props.applySettings}/>
                </div>

            </div>
            <div className={"counter"}>
                <Buttons addCounter={props.addCounter} reset={props.reset} counter={props.counter} maxValue={props.maxValue}/>
                <Screen counter={props.counter} maxValue={props.maxValue}/>
            </div>
        </div>
    )
}