import React from "react";
import loadingRing from "../../../assets/images/loadingRing.svg"
import styles from "./Preloader.module.css";

const Preloader = () => {
    return(
        <div className={styles.imgWrapper}>
            <img src={loadingRing} alt=""/>
        </div>
    )
}

export default Preloader;