import React, { FC } from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/images/network.png"
import styles from "./Logged.module.css"

const Logged: FC<TProps> = ({login, logoutThunk}) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <div className={styles.linkDiv}>
                <Link to={'/profile'} className={`${styles.link} ${styles.userName}`}>{login}</Link>
                <button onClick={() => logoutThunk()} className={styles.exits}>Выйти</button>
            </div>
        </header>
    )
}

export default Logged;


type TProps = {
    login: string
    logoutThunk: () => void
}
