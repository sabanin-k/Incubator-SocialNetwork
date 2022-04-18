import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import FriendsFieldContainer from '../common/FriendsField/FriendsFieldContainer';
import style from './Navigation.module.css';

type TProps = {
    isLogged: boolean
}

const Navigation: FC<TProps> = ({ isLogged }) => {
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

        {isLogged && <FriendsFieldContainer />}
    </nav>
}

export default Navigation