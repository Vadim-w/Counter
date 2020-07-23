import React from 'react';
import { Buttons } from './Buttons';
import {Screen} from "./Screen";

type cotreType = {
    addCountre: () => void
    countre: number
    reset: () => void
}

export const Counter: React.FC<cotreType> = (props) => {
    return(
        <div className={"counter"}>
            <Buttons addCounter={props.addCountre} reset={props.reset} countre={props.countre}/>
            <Screen countre={props.countre}/>
        </div>
    )
}