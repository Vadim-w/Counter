import React, {ChangeEvent} from 'react';
import {Button} from "../Common/Button";
import styles from './ScreenSettings.module.css'

type ScreenSettingsPropsType = {
    applySettings: () => void
    error: boolean
    changeStartValue: (value: string) => void
    changeMaxValue: (value: string) => void
    startValue: string
    maxValue: string
    counter: number
}

export const ScreenSettings = (props:ScreenSettingsPropsType) => {


    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        props.changeStartValue(e.currentTarget.value)
    }

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        props.changeMaxValue(e.currentTarget.value)
    }

    return (
        <div className={"settingsScreen"}>
            <div>Start value:
                <input className={+(props.startValue) < 0 || +(props.startValue) >= +(props.maxValue) ? styles.startValueError : ""}
                       value={props.startValue} onChange={onChangeStartValue} type='number'/>
            </div>
            <div>Max value:
                <input className={+(props.maxValue) < 0 || +(props.startValue) >= +(props.maxValue) ? styles.maxValueError : ""}
                       value={props.maxValue} onChange={onChangeMaxValue} type='number' />
            </div>
            <div className={"buttonSettings"}>
                <Button title={"set"} onClickHandler={props.applySettings} disabled={ props.counter > +(props.startValue)}/>
            </div>
        </div>
    )
}