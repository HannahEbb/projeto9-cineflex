import Header from "./Header/Header";
import Info from "./Info/Info";

//ANTES EU CRIO OS COMPONENTE MENORES AQUI PARA RENDERIZAR E VER SE LAYOUT ESTÁ OK
//DEPOIS App TERÁ "TELA1" LEVANDO A TELA2 ... USANDO REACT ROUTERDOM


export default function App() {

    return(
        <>
        <Header />
        <Info />
        </>
    );
}