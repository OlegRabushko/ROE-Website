import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialogUserContainer}>
        <div><NavLink className={s.photoUser} to={path}>{props.img}</NavLink></div>
        <div>
            <NavLink className={s.dialogUser} to={path}>{props.name}</NavLink>
        </div>
    </div>
}

export default DialogItem;