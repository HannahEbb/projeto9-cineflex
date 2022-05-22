import Botaohora from "../Botaohora/Botaohora";

export default function Data({dia, data, hora}) {

    const horarios = hora;

    return (
        <>
        <div>{dia}<span> </span>{data}</div>
        <div className="hora">
        {horarios.map(i => <Botaohora key={i.id} idSessao ={i.id} name={i.name}/>)}
        </div>
        </>
    );
}