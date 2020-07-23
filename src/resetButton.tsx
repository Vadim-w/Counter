import React from 'react';

type resetButtonType = {
    reset: () => void
    countre: number
}

export const ButtonReset:React.FC<resetButtonType> = (props) => {
    return (
        <button disabled={props.countre === 0? true:false} onClick={props.reset} className={"reset"}>reset</button>
    )
}