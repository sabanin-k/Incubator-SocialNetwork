import React, { FC, useState } from 'react'
import { TStatus } from '../../../api/wsAPI'
import styles from './InputMessages.module.css'

export const InputMessage: FC<TProps> = ({ handleSendMessage, connectStatus }) => {
    const [value, setValue] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
    const handleClick = () => {
        handleSendMessage(value)
        setValue('')
    }
    
    return <div className={styles.wrapper}>
        <textarea value={value} onChange={handleChange} className={styles.textarea} placeholder='Начни писать...'/>
        <button disabled={connectStatus === 'connecting' || value.length === 0 } onClick={handleClick} className={styles.button}>
            { connectStatus === 'connecting'
                ? 'Загрузка...'
                : value.length === 0
                    ? 'Пусто'
                    : 'Отправить' }
            </button>
    </div>
}


type TProps = { 
    connectStatus: TStatus
    handleSendMessage: (message: string) => void
}