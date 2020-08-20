import React from 'react';
import {Buttons} from './Buttons';
import {Screen} from "./Screen";
import {ScreenSettings} from "../SettingsCounterBlock/ScreenSettings";

type counterType = {
    addCounter: () => void
    counter: number
    reset: () => void
    applySettings: () => void
    startValue: string
    maxValue: string
    error: boolean
    changeStartValue: (value: string) => void
    changeMaxValue: (value: string) => void
    settingsOn: boolean
}

export const Counter: React.FC<counterType> = (props) => {
    return (<div className={"commonBlock"}>
            <div className={"settingsBlock"}>
                <div>
                <ScreenSettings
                    applySettings={props.applySettings}
                    error={props.error}
                    changeStartValue={props.changeStartValue}
                    changeMaxValue={props.changeMaxValue}
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    counter={props.counter}
                />
                </div>

            </div>
            <div className={"counter"}>
                <Buttons addCounter={props.addCounter}
                         reset={props.reset}
                         counter={props.counter}
                         maxValue={props.maxValue}/>
                <Screen counter={props.counter}
                        maxValue={props.maxValue}
                        error={props.error}
                        startValue={props.startValue}
                        settingsOn={props.settingsOn}
                />
            </div>
        </div>
    )
}