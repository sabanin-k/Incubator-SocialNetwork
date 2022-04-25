import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logoutThunk } from "../../../store/reducers/authReducer"
import { getAuthData } from "../../../store/selectors/authSelector"
import logo from "../../../assets/images/network.png"
import styles from "./Logged.module.css"

export const Logged: FC = () => {
    const data = useSelector(getAuthData)
    const dispatch = useDispatch()
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <div className={styles.linkDiv}>
                <Link to={'/profile'} className={`${styles.link} ${styles.userName}`}>{data.login}</Link>
                <button onClick={() => dispatch(logoutThunk())} className={styles.exits}>Выйти</button>
            </div>
        </header>
    )
}
