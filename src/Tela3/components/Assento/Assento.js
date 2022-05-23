import React from "react";
import { useState } from 'react';


export default function Assento({name, isAvailable}) {

    const [status, setAssento] = useState("assento");
    const [arrayIds, setIds] = useState([]);
    
 

    function selectSeat() {   
         if(isAvailable && status==="assento") {
              setAssento("assento selecionado");
              setIds([...arrayIds, Number(name)]);    
              
         } else if(isAvailable && status==="assento selecionado") {
             setAssento("assento");
    
         } else {
             alert ("Assento indisponível!");
         }
       }


    return (

        <>
        { (!isAvailable) ? 
        <div onClick={selectSeat} className={"assento indisponivel"}>
        {name}</div> : 
        <div onClick={selectSeat} className={status}>
        {name}</div>}
        </>
        
    );
}

