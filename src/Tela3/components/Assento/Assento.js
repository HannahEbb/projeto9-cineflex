import React from "react";
import { useState } from "react/cjs/react.production.min";


export default function Assento({name, isAvailable}) {

    const [status, setAssento] = React.useState("assento");

  
    function selectSeat() {   
         if(isAvailable) {
         //ternário para alterar de selecionado para não selecionado
              setAssento("assento selecionado");
         } else {
             setAssento("assento indisponivel");
             alert ("Assento indisponível!");
         }
        
       }


    return (
        <div onClick={selectSeat} className={status}>
            {name} {isAvailable} 
        </div>
    );
}