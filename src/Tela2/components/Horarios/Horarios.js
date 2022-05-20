import { useState, useEffect } from "react";
import Botaohora from "../Botaohora/Botaohora";


export default function Horarios ( { hora } ) {

    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        setHorarios([...hora]);
    }, [])

    return (
       
        <div className="hora">
        {horarios.map(i => <Botaohora idSessao ={i.id} name={i.name}/>)}
        </div>
    
    );
}