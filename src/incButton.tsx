import React from 'react';

type insType = {
    addCountre: () => void
    countre: number
}

 export const ButtonIns:React.FC<insType> = (props) => {
     return(
         <button disabled={props.countre===5? true:false} onClick={props.addCountre} className={"ins"}>ins</button>
     )
 }