import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Horarios from "../Horarios";
import Footer from "../Footer/Footer";

export default function Sessoes () {
    const { idFilme } = useParams();
    
    const [sessao, setSessao] = useState([]);
    const [dados, setDados] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            setSessao([...response.data.days])
            setDados({...response.data})

        })
    }, []);

    return (
        <>
        <div className="sessoes">
            {sessao.map(item => <><div>{item.weekday}<span> </span>{item.date}</div> <Horarios dia={item.weekday} hora={item.showtimes}/> </>)}
        </div>
        <Footer title={dados.title} posterURL={dados.posterURL}/>
        </>
    );
}