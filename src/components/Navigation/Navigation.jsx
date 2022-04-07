import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsOnlineContainer from './FriendsOnline/FriendsOnlineContainer';
import style from './Navigation.module.css';

const Navigation = () => {
    return <nav className={style.nav}>
        <ul className={style.ul}>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/profile'>Профиль</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/dialogs'>Сообщения</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/news'>Новости</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/music'>Музыка</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/users'>Люди</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/settings'>Настройки</NavLink>
            </li>
        </ul>

        <FriendsOnlineContainer />
    </nav>
}

export default Navigation