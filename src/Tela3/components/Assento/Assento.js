import { useState } from "react/cjs/react.production.min";

export default function Assento({name, isAvailable}) {

    //const [statusAssento, setAssento] = useState("");

    

    return (
        <div className="assento">
            {name}
        </div>
    );
}