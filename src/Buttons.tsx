import React from 'react';
import {ButtonIns} from "./incButton";
import {ButtonReset} from "./resetButton";
import {Button} from "./Button";

type buttonsType = {
    addCounter: () => void
    reset: () => void
    countre: number
}

export const Buttons: React.FC<buttonsType> = (props) => {
    return (
        <div className={"buttons"}>
            <Button title={"inc"} onClickHandler={props.addCounter} disabled={props.countre === 5}/>
            {/*<ButtonIns addCountre={props.addCounter} countre={props.countre}/>*/}
            <ButtonReset reset={props.reset} countre={props.countre}/>
        </div>
    )
}