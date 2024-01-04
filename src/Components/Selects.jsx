import React from "react"

import borabora from "../Assets/borabora.jpg";
import babora2 from "../Assets/borabora2.jpg";
import keywest from "../Assets/keywest.jpg";
import maldives from "../Assets/maldives.jpg";
import maldives2 from "../Assets/maldives2.jpg";
import maldives3 from "../Assets/maldives3.jpg";
import Selectscard from "./Selectscard";

const Selects = () => {
    return ( 
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Selectscard bg={borabora} text="borabora"/>
            <Selectscard bg={babora2} text="Maldives"/>
            <Selectscard bg={keywest} text="keywest"/>
            <Selectscard bg={maldives} text="jamaica"/>
            <Selectscard bg={maldives2} text="Tokyo"/>
            <Selectscard bg={maldives3} text="Lisbon"/>
        </div>
     );
}
 
export default Selects;