import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage } from "../../../store/reducers/dialogsReducer";
import { TGlobalState } from "../../../store/reduxStore";
import s from './DialogMessage.module.css';

export const DialogMessage: FC = () => {
    const messages = useSelector((state: TGlobalState) => state.dialogsPage.messages)
    const dispatch = useDispatch()
    return <>
        {messages.map(item => {
            return (
                <div key={item.id} className={s.message}>
                    <span className={s.text}>{item.message}
                        <span className={s.delete}
                            onClick={() => dispatch(deleteMessage(item.id))}>Удалить</span>
                    </span>
                </div>)
        })}
    </>
}
