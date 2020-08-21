import React from 'react';
import styles from './Screen.module.css'

type screenType = {
    counter: number
    startValue: string
    maxValue: string
    error: boolean
    settingsOn: boolean
}

export const Screen:React.FC<screenType> = (props) => {
    return(
        <div className={props.counter === +(props.maxValue) ? styles.screenBlock : styles.screen} >
            {props.error
                ? <span className={styles.correctValue}>incorrect value!</span>
                : props.settingsOn
                    ? props.counter
                    : <span className={styles.correctValue}>enter values and press 'set'</span>
            }
        </div>
    )
}