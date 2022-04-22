import React, { FC } from "react";
import { TDialogsMessage } from "../../../store/reducers/dialogsReducer";
import s from './DialogMessage.module.css';

const DialogMessage: FC<TProps> = ({ messages, deleteMessage }) => {
    return <>
        {messages.map(item => {
            return (
                <div key={item.id} className={s.message}>
                    <span className={s.text}>{item.message}
                        <span className={s.delete}
                            onClick={() => deleteMessage(item.id)}>Удалить</span>
                    </span>
                </div>)
        })}
    </>
}

export default DialogMessage;


type TProps = {
    messages: TDialogsMessage[]
    deleteMessage: (id: number) => void
}
