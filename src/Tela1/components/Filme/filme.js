import React from "react";
import { Link } from "react-router-dom";

export default function Filme ({idFilme, posterURL}) {


    return (
        <Link to={`/sessoes/${idFilme}`} >
        <div className="filme" > 
            <img width="129px" height="193px" src={posterURL} alt="HEY"/>
        </div>
        </Link>
    );
}

