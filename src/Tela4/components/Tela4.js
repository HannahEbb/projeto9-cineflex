import Top from "../../shared/components/Top/Top";
import DadosComprador from "./Dadoscomprador/Dadoscomprador";

export default function Tela4 () {

    return(
        <>
        <Top frase={"Pedido feito com sucesso!"}/>
        <DadosComprador />
        </>
    );
}