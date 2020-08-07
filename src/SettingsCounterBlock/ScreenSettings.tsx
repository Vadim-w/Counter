import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Common/Button";

type ScreenSettingsPropsType = {
    applySettings: (start: number, max: number) => void
}

export const ScreenSettings = (props:ScreenSettingsPropsType) => {

    let [startValue, setStartValue] = useState("0")
    let [maxValue, setMaxValue] = useState("0")

    function onChangeStartValue(e: ChangeEvent<HTMLInputElement>) {
        setStartValue(e.currentTarget.value)
    }

    function onChangeMaxValue(e: ChangeEvent<HTMLInputElement>) {
        setMaxValue(e.currentTarget.value)
    }

    function applySettings() {
        if(startValue.trim() && maxValue.trim()) {
            props.applySettings(Number(startValue), Number(maxValue))
        }
    }

    return (
        <div className={"settingsScreen"}>
            <div className={"maxValue"}>Start value: <input value={startValue} onChange={onChangeStartValue} type='number'/></div>
            <div className={"startValue"}>Max value: <input value={maxValue} onChange={onChangeMaxValue} type='number' /></div>
            <div className={"buttonSettings"}>
                <Button title={"set"} onClickHandler={applySettings} disabled={false}/>
            </div>
        </div>
    )
}