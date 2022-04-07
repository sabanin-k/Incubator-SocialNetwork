import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialogListItem}>
            {props.friends.map(item => {
                return (
                    <NavLink
                        to={'/dialogs/' + item.id}
                        key={item.id}
                        className={navData => navData.isActive ? s.active : s.link}
                    >
                        <div className={s.friend}>
                            <img className={s.img} src={item.avaLink} alt='ava' width='20px' />
                            <span className={s.span}>{item.name}</span>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default DialogItem;