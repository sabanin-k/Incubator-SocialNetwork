import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogged } from '../../store/selectors/authSelector';
import {FriendsFieldContainer} from '../common/FriendsField/FriendsFieldContainer';
import styles from './Navigation.module.css';

export const Navigation: FC = () => {
    const isLogged = useSelector(getIsLogged)
    return <nav className={styles.nav}>
        <ul className={styles.ul}>
            <li className={styles.li}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.link} to='/profile'>Мой профиль</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.link} to='/dialogs'>Сообщения</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.link} to='/news'>Новости</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.link} to='/users'>Люди</NavLink>
            </li>
            <li className={styles.li}>
                <NavLink className={navData => navData.isActive ? styles.active : styles.link} to='/chat'>Чат</NavLink>
            </li>
        </ul>

        {isLogged && <FriendsFieldContainer />}
    </nav>
}
