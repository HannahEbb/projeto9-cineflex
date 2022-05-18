import reactDom from "react-dom";
import App from "./shared/components/App";

import "./styles.css";
import "./shared/components/Header/styles-header.css";
import "./shared/components/Info/styles-info.css";
import "./Tela1/components/Filmes/styles-filmes.css";
import "./Tela1/components/Filme/styles-filme.css";
import "./shared/components/Top/styles-top.css";




reactDom.render(<App />, document.querySelector(".root"));