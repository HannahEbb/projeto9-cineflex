import { useState } from "react/cjs/react.production.min";

export default function Assento({name, isAvailable}) {

    //const [statusAssento, setAssento] = useState("assento");

    // function selectSeat(isAvailable) {
    //     if(isAvailable) {
    //         //ternário para alterar de selecionado para não selecionado
    //         setAssento("assento selecionado");
    //     } else {
    //         alert("Assento indisponível.");
    //     }
    // }

    

    return (
        <div  className="assento">
            {name}
        </div>
    );
}