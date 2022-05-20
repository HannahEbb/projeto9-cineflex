import { Link } from "react-router-dom";


export default function Botaohora ({idSessao, name}) {
    return (
        <Link to={`/assentos/${idSessao}`}>
        <div className="botao-hora">{name}</div>
        </Link>
    );
}