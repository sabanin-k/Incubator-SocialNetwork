import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/images/network.png"
import styles from "./UnLogged.module.css"

const UnLogged = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.linkDiv}>
                <Link to='#' className={styles.link + ' ' + styles.login}>Вход</Link>
            </div>
        </header>
    )
}

export default UnLogged;