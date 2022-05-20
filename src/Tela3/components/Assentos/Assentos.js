import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Assento from "../Assento/Assento";


export default function Assentos () {
    const { idSessao } = useParams();

    const [assentos, setAssentos] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then(response => {
            setAssentos([...response.data.seats]);
            // setSessao({...response.data});
        })
    }, []);


    return (
        <>
        <div className="assentos">
            {assentos.map(a => <Assento name={a.name} isAvailabe={a.isAvailabe}/>)}
        </div>
        </>

    );
}