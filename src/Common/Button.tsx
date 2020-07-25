import React from 'react';

type ButtonType = {
    title: string
    onClickHandler: () => void
    disabled: boolean
}

export const Button:React.FC<ButtonType> = (props) => {
    return (
        <button disabled={props.disabled} onClick={props.onClickHandler} className={"reset"}>{props.title}</button>
    )
}