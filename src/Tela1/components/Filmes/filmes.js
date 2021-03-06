import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Filme from "../Filme/Filme";



export default function Filmes () {

    const [filmes, setFilmes] = useState([]);


	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
			setFilmes([...resposta.data]);
		});

	}, []);


    return(
        <div className="filmes">
        {filmes.map(filme => <Filme key={filme.id}
                                    idFilme={filme.id} 
                                    title={filme.title} 
                                    posterURL={filme.posterURL}
                                    overview={filme.overview}
                                    releaseDate={filme.releaseDate}/>)}
        </div>
    );
}