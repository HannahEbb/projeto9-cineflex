import axios from 'axios';
import { Link } from 'react-router-dom';



export default function Botaoreservar ({nome, cpf}) {

    function reservar () {
        const dadosSucesso = {
            ids: [1, 2, 3],
            name: nome,
            cpf: cpf
        };

        const promise = axios.post(
            "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
            dadosSucesso
          );

          promise.then((res) => {
            console.log(res.data);
          });
    }
   
    return (
        <Link to="/sucesso">
        <div className="container-botao">
            <div className="botao-reservar" onClick={reservar}>Reservar assentos</div>
        </div>
        </Link>
    );
}