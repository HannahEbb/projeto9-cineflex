import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Assento from "../Assento/Assento";
import Comprador from "../Comprador/Comprador";
import Footer from "../../../Tela2/components/Footer/Footer";


export default function Assentos () {
    const { idSessao } = useParams();

    const [sessao, setSessao] = useState({});
    const [assentos, setAssentos] = useState([]);


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            setSessao({...response.data});
            setAssentos([...response.data.seats]);
        })
    }, []);
    console.log(sessao);


    return (
        <>
        <div className="assentos">
            {assentos.map(a => <Assento name={a.name} isAvailable={a.isAvailable}/>)}
        </div>
        <div className="legenda">
            <div><div className="select">0</div><p>Selecionado</p></div>
            <div><div className="disp">0</div><p>Disponível</p></div>
            <div><div className="indisp">0</div><p>Indisponível</p></div>
        </div>
        <Comprador />
        <Footer />
        </>

    );

    //posterURL={sessao.movie.posterURL} title={sessao.movie.title} diasemana={sessao.day.weekday} data={sessao.name}
}