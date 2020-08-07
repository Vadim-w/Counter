import React from 'react';

type screenType = {
    counter: number
    maxValue: number
}

export const Screen:React.FC<screenType> = (props) => {
    return(
        <div className={props.counter === props.maxValue? "screen-block": "screen"} >
            {props.counter}
        </div>
    )
}