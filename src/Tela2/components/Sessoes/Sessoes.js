import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Data from "../Data/Data";

export default function Sessoes () {
    const { idFilme } = useParams();
    
    const [sessao, setSessao] = useState([]);
    const [dados, setDados] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        promise.then(response => {
            setSessao([...response.data.days]);
            setDados({...response.data});

        })
    }, []);


    return (
        <>
        <div className="sessoes">
            {sessao.map(item => <><Data key={item.id} dia={item.weekday} data={item.date} hora={item.showtimes}/></>)}
        </div>
        <Footer key={dados.id} title={dados.title} posterURL={dados.posterURL}/>
        </>
    );
}