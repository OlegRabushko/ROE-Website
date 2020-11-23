import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
import s from "./Preloader.module.css"

let Preloader = (props) => {
    return (<div>
        <img className={s.preloader} src={preloader} />
    </div>)
}

export default Preloader;