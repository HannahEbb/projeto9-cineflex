import { Link } from "react-router-dom";
import Botaoreservar from "../../../Tela3/components/Botaoreservar/Botaoreservar";

export default function DadosComprador ({nome, cpf}) {

    return(
        <>
        <div className="container-todos-dados">
            <div className="container-dados-comprador">
                <div className="tipo-de-dado">Filme e sessão</div>
                <div className="dados">nome do filme</div>
                <div className="dados">data e hora</div>
            </div>
            <div className="container-dados-comprador">
                <div className="tipo-de-dado">Ingressos</div>
                <div className="dados">XXX</div>
                <div className="dados">XXX</div>
            </div>
            <div className="container-dados-comprador">
                <div className="tipo-de-dado">Comprador</div>
                <div className="dados">{nome}</div>
                <div className="dados">{cpf}</div>
            </div>
        </div>

        <Link to="/">
        <div className="container-botao">
            <div className="botao-reservar" >Voltar para Home</div>
        </div>
        </Link>
        </>
    );
}