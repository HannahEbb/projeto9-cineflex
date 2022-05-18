import reactDom from "react-dom";
import App from "./shared/components/App";

import "./styles.css";
import "./shared/components/Header/styles-header.css";
import "./shared/components/Info/styles-info.css";




reactDom.render(<App />, document.querySelector(".root"));