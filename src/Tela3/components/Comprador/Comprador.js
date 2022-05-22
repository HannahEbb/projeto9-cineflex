

export default function Comprador () {

const [digitarnome, setDigitarnome] = ("");
const [digitarcpf, setDigitarcpf] = ("");

// function reservar {

// }


    return (
        <>
        <div className="container-comprador">
        <div className="dados-comprador">
            <p>Digite o nome do comprador:</p>
            <input placeholder="  Digite seu nome" value={digitarnome} onChange={event => setDigitarnome(event.target.value)}></input>
        </div>
        <div className="dados-comprador">
            <p>CPF do comprador:</p>
            <input placeholder="  Digite seu CPF" value={digitarcpf} onChange={e => setDigitarcpf(e.target.value)}></input>
        </div>
        </div>
        <div className="container-botao">
            <div className="botao-reservar" /*onClick={reservar}*/>Reservar assentos</div>
        </div>
        </>

    );
}