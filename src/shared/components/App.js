import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "../../Tela1/components/Tela1";
import Tela2 from "../../Tela2/components/Tela2";
import Tela3 from "../../Tela3/components/Tela3";
import Tela4 from "../../Tela4/components/Tela4";



export default function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Tela1 />} />
                <Route path="/sessoes/:idFilme" element={<Tela2 />} />
                <Route path="/assentos/:idSessao" element={<Tela3 />} />
                <Route path="/sucesso" element={<Tela4 />} />
                <Route path="/" element={<Tela1 />} />
            </Routes>
        </BrowserRouter>
    );
}