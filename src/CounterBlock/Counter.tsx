import React from 'react';
import {Buttons} from './Buttons';
import {Screen} from "./Screen";
import {Button} from "../Common/Button";
import {ScreenSettings} from "../SettingsCounterBlock/ScreenSettings";

type counterType = {
    addCounter: () => void
    counter: number
    reset: () => void
}

export const Counter: React.FC<counterType> = (props) => {
    return (<div className={"commonBlock"}>
            <div className={"settingsBlock"}>
                <div className={"buttons"}>
                <Button title={"set"} onClickHandler={ () => {}} disabled={false}/>
                <ScreenSettings/>
                </div>

            </div>
            <div className={"counter"}>
                <Buttons addCounter={props.addCounter} reset={props.reset} counter={props.counter}/>
                <Screen counter={props.counter}/>
            </div>
        </div>
    )
}