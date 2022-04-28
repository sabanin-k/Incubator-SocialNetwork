import React, { FC, useState } from 'react'
import styles from './InputMessages.module.css'

export const InputMessage: FC<TProps> = ({ handleSendMessage }) => {
    const [value, setValue] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
    const handleClick = () => {
        handleSendMessage(value)
        setValue('')
    }
    return <div className={styles.wrapper}>
        <textarea value={value} onChange={handleChange} className={styles.textarea}/>
        <button onClick={handleClick} className={styles.button}>Отправить</button>
    </div>
}


type TProps = { handleSendMessage: (message: string) => void }