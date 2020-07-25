import React from 'react';

type screenType = {
    counter: number
}

export const Screen:React.FC<screenType> = (props) => {
    return(
        <div className={props.counter === 5? "screen-block": "screen"} >
            {props.counter}
        </div>
    )
}