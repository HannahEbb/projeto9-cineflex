import { useState, useEffect } from "react";


export default function Horarios ( {hora, dia} ) {

    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        setHorarios([...hora]);
    }, [])

    return (
        <div className="hora">
        {horarios.map(i => <div className="botao-hora">{i.name}</div> )}
        </div>
    );
}