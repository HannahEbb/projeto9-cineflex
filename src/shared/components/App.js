import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top/Top";
import Filmes from "../../Tela1/components/Filmes/Filmes";
import Tela1 from "../../Tela1/components/Tela1";
import Tela2 from "../../Tela2/components/Tela2";


//ANTES EU CRIO OS COMPONENTE MENORES AQUI PARA RENDERIZAR E VER SE LAYOUT ESTÁ OK
//UM COMPONENTE POR PÁGINA


export default function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tela1 />} />
                <Route path="/sessoes/:idFilme" element={<Tela2 />} />

            </Routes>
        </BrowserRouter>
    );
}