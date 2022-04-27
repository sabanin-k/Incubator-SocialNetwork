import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getChatMessagesSelector } from '../../../store/selectors/chatSelector'
import styles from './Messages.module.css'

export const Messages: FC = () => {
    const messages = useSelector(getChatMessagesSelector)

    return <div className={styles.messages} >
        {messages !== null && messages.length !== 0
        ?  messages.map((m, i) => {
            console.log('message');
            
            return <div key={i} className={styles.wrapper}>
                <div className={styles.photoWrapper}>
                    <Link to={'/users/' + m.userId}>
                        <img src={m.photo} alt={m.userName} width='50px' className={styles.photo} />                    
                    </Link>
                </div>
                <div className={styles.messageWrapper}>
                    <b className={styles.name}>{m.userName}</b>
                    <p className={styles.message}>{m.message}</p>
                </div>
            </div>
        })
        : <p>Нет сообщений</p> }
    </div>
}
