import Header from "../Header/Header";
import Info from "../Info/Info";

export default function Top ( {frase} ) {
    return(
        <div className="top">
            <Header />
            <Info frase={ frase }/>
        </div>
    );
}