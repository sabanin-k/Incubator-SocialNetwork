import React, { FC } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { TGlobalState } from "../../../store/reduxStore";
import styles from './DialogItem.module.css';

export const DialogItem: FC = () => {
    const friends = useSelector((state: TGlobalState) => state.dialogsPage.friends)
    return <>
        <div className={styles.dialogListItem}>
            {friends.map(item => {
                return (
                    <NavLink
                        to={'/dialogs/' + item.id}
                        key={item.id}
                        className={navData => navData.isActive ? styles.active : styles.link}
                    >
                        <div className={styles.friend}>
                            <img className={styles.img} src={item.avaLink} alt='ava' width='20px' />
                            <span className={styles.span}>{item.name}</span>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    </>
}
