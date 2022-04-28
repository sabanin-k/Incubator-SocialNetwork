import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { TMessages } from '../../../api/wsAPI'
import userImage from '../../../assets/images/user.png'
import styles from './Messages.module.css'

export const Messages: FC<TProps> = ({ messages }) => {
    return <div className={styles.messages} >
        {messages !== null && messages.length !== 0
        ? messages.map((m, i) => {            
            return <div key={i} className={styles.wrapper}>
                <div className={styles.photoWrapper}>
                    <Link to={'/users/' + m.userId}>
                        {m.photo
                        ? <img src={m.photo} alt={m.userName} width='50px' className={styles.photo} />
                        : <img src={userImage} alt={m.userName} width='50px' className={styles.photo} />}
                    </Link>
                </div>
                <div className={styles.messageWrapper}>
                    <b className={styles.name}>{m.userName}</b>
                    <p className={styles.message}>{m.message}</p>
                </div>
            </div>
        })
        : <p className={styles.plug}>Нет сообщений</p> }
    </div>
} 


type TProps = { messages: TMessages[] }