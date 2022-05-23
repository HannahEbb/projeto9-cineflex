import { useState } from "react";
import Botaoreservar from "../Botaoreservar/Botaoreservar";



// vai receber como prop o array com os assentos selecionados
export default function Comprador () {


const [digitarnome, setDigitarnome] = useState("");
const [digitarcpf, setDigitarcpf] = useState("");



    return (
        <>
        <div className="container-comprador">
        <div className="dados-comprador">
            <p>Digite o nome do comprador:</p>
            <input type="text" placeholder="  Digite seu nome" value={digitarnome} onChange={event => setDigitarnome(event.target.value)} />
        </div>
        <div className="dados-comprador">
            <p>CPF do comprador:</p>
            <input type="text" placeholder="  Digite seu CPF" value={digitarcpf} onChange={e => setDigitarcpf(e.target.value)} />
        </div>
        </div>
        <Botaoreservar nome={digitarnome} cpf={digitarcpf}/>
        </>

    );
}