import React from 'react';
import {Button} from "../Common/Button";

type buttonsType = {
    addCounter: () => void
    reset: () => void
    counter: number
    maxValue: string
    settingsOn: boolean
}

export const Buttons: React.FC<buttonsType> = (props) => {
    return (
        <div className={"buttons"}>
            <Button title={"inc"} onClickHandler={props.addCounter} disabled={props.counter === +(props.maxValue) || !props.settingsOn }/>
            <Button title={"reset"} onClickHandler={props.reset} disabled={props.counter === 0}/>
        </div>
    )
}