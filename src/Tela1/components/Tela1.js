import Top from "../../shared/components/Top/Top";
import Filmes from "./Filmes/Filmes";


export default function Tela1 () {
    return (
        <>
        <Top frase={"Selecione o filme"}/>
        <Filmes />
        </>
    );
}