import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { TDialogsFriend } from "../../../store/reducers/dialogsReducer";
import s from './DialogItem.module.css';

const DialogItem: FC<TProps> = ({ friends }) => {
    return <>
        <div className={s.dialogListItem}>
            {friends.map(item => {
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
    </>
}

export default DialogItem;


type TProps = {
    friends: TDialogsFriend[]
}
