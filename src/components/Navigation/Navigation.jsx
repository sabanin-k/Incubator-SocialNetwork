import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsFieldContainer from '../common/FriendsField/FriendsFieldContainer';
import style from './Navigation.module.css';

const Navigation = () => {
    return <nav className={style.nav}>
        <ul className={style.ul}>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/profile'>Мой профиль</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/dialogs'>Сообщения</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/news'>Новости</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={navData => navData.isActive ? style.active : style.link} to='/users'>Люди</NavLink>
            </li>
        </ul>

        <FriendsFieldContainer />
    </nav>
}

export default Navigation