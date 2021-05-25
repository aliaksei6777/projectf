import React from "react";
import preloader from "./loading.svg";


export const Preloader = () => {
    return <div>
        <img src={preloader} style={{height: 100}}/>
    </div>
}
