import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/images/network.png"
import styles from "./Logged.module.css"

const Logged = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'/>
            <div className={styles.linkDiv}>
                <Link to={'profile/'} className={`${styles.link} ${styles.userName}`}>{props.login}</Link>
                <button onClick={() => props.logoutThunk()} className={styles.exits}>Выйти</button>
            </div>
        </header>
    )
}

export default Logged;