import React from 'react';

type screenType = {
    countre: number
}

export const Screen:React.FC<screenType> = (props) => {
    return(
        <div className={props.countre === 5? "screen-block": "screen"} >
            {props.countre}
        </div>
    )
}