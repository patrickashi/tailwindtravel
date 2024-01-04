import React from "react"

import borabora from "../Assets/borabora.jpg";
import babora2 from "../Assets/borabora2.jpg";
import keywest from "../Assets/keywest.jpg";
import maldives from "../Assets/maldives.jpg";
import maldives2 from "../Assets/maldives2.jpg";
import maldives3 from "../Assets/maldives3.jpg";

const Destinations = () => {
    return ( 
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1> All Inclusive Resorts</h1>
            <p className="py-4">On the Carribean's best Beaches</p>
            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-4 md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={borabora} alt="/" />
                <img className="w-full h-full object-cover" src={borabora}  alt="/" />
                <img className="w-full h-full object-cover" src={borabora}  alt="/" />
                <img className="w-full h-full object-cover" src={borabora}  alt="/" />
                <img className="w-full h-full object-cover" src={borabora}   alt="/" />
            </div>
        </div>
     );
}
 
export default Destinations;