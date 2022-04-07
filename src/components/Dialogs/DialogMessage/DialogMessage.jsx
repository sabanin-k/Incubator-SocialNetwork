import React from "react";
import s from './DialogMessage.module.css';

const DialogMessage = (props) => {
    return (
        props.messages.map(item => {
            return (
                <div key={item.id} className={s.message}>
                    <span className={s.text}>{item.message}
                        <span className={s.delete}
                            onClick={() => props.deleteMessage(item.id)}>Удалить</span>
                    </span>
                </div>)
        })
    )
}

export default DialogMessage;