

export default function Filme ({id, posterURL}) {
    return (
        <div className="filme" > 
            <img width="129px" height="193px" src={posterURL} alt="HEY"/>
        </div>
    );
}

// ADD UM ONCLICK AO LADO DE "FILME" COM ARROW FUNCTION para ROTA da Tela2