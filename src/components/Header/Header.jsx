import React from 'react';
import s from './Header.module.css';
import { NavLink, Redirect } from "react-router-dom";
import Logo from '../../assets/images/logo.png'


const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logoContainer}>
            <img src={Logo} className={s.logo} />
        </div>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.user}><div className={s.active}></div><div className={s.user}></div>{props.login} -
                <button className={s.userBtn} onClick={props.logout}>Log out</button> </div>
                : <Redirect to={'/login'}><div className={s.userBtn}>Login</div></Redirect>}

        </div>
    </header>
}

export default Header;