import React, { FC, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { TMessages } from '../../../api/wsAPI'
import userImage from '../../../assets/images/user.png'
import styles from './Messages.module.css'

export const Messages: FC<TProps> = ({ messages }) => {
    const divRef = useRef(null)

    // НИ ЭТОТ, НИ ВТОРОЙ СКРОЛЛЫ НЕ СПУСКАЮТСЯ ДО САМОГО НИЗА И ОНИ МЕНЯ ЗАЕБАЛИ УЖЕ. ПОШЕЛ НАХУЙ, СКРОЛЛ!
    // UPD: Скролл ломался из-за размера аватарок, снизил с 50px до 30 - заработало
    
    // const scrollToBottom = () => {
    //     divRef.current?.scrollIntoView({ block: 'end' })
    // }
    const scrollToBottom = () => {
        const scrolledDiv = document.getElementById('scrolledDiv')
        scrolledDiv.scrollTo({ top: scrolledDiv.scrollHeight })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return <>
        <div className={styles.messages} id='scrolledDiv'>
            {messages !== null && messages.length !== 0
                ? messages.map((m, i) => {
                    return <div key={i} className={styles.wrapper} >
                        <div className={styles.photoWrapper}>
                            <Link to={'/users/' + m.userId}>
                                {m.photo
                                    ? <img src={m.photo} alt={m.userName} className={styles.photo} />
                                    : <img src={userImage} alt={m.userName} className={styles.photo} />}
                            </Link>
                        </div>
                        <div className={styles.messageWrapper}>
                            <p className={styles.name}>{m.userName}</p>
                            <p className={styles.message}>{m.message}</p>
                        </div>
                    </div>
                })
                : <p className={styles.plug}>Нет сообщений</p>}
            <div ref={divRef}></div> {/* for autosrolling to this div */}
        </div>
    </>
}


type TProps = { messages: TMessages[] }