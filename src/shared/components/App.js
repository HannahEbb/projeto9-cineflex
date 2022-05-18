import Top from "./Top/Top";
import Filmes from "../../Tela1/components/Filmes/Filmes";


//ANTES EU CRIO OS COMPONENTE MENORES AQUI PARA RENDERIZAR E VER SE LAYOUT ESTÁ OK
//DEPOIS App TERÁ "TELA1" LEVANDO A TELA2 ... USANDO REACT ROUTERDOM


export default function App() {

    return(
        <>
        <Top />

        <Filmes />
        </>
    );
}