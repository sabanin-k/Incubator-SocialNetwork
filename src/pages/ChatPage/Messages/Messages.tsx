import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TMessages } from '../../../api/wsAPI'
import userImage from '../../../assets/images/user.png'
import styles from './Messages.module.css'

export const Messages: FC<TProps> = ({ messages }) => {
    const [scrollActive, setScrollActive] = useState(true)
    const divRef = useRef(null)
    const scrollRef = useRef(null)

    // НИ ЭТОТ, НИ ВТОРОЙ СКРОЛЛЫ НЕ СПУСКАЮТСЯ ДО САМОГО НИЗА И ОНИ МЕНЯ ЗАЕБАЛИ УЖЕ. ПОШЕЛ НАХУЙ, СКРОЛЛ!
    // const scrollToBottom = () => {
    //     divRef.current?.scrollIntoView()
    // }
    const scrollToBottom = () => {
        const scrolledDiv = document.getElementById('scrolledDiv')
        scrolledDiv.scrollTo({ top: scrolledDiv.scrollHeight })
    }
    const handleScroll = () => {        
        scrollRef.current.scrollHeight - scrollRef.current.scrollTop > 680
            ? setScrollActive(false)
            : setScrollActive(true)
    }

    useLayoutEffect(() => {
        if (scrollActive) scrollToBottom()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    return <div className={styles.messages} onScroll={handleScroll} ref={scrollRef} id='scrolledDiv'>
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
                <div ref={divRef}></div> {/* for autosrolling to this div */}
            </div>
        })
        : <p className={styles.plug}>Нет сообщений</p> }
    </div>
} 


type TProps = { messages: TMessages[] }