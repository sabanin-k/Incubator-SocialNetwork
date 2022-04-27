import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../store/reducers/chatReducer'
import styles from './InputMessages.module.css'

export const InputMessage: FC = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)
    const handleClick = () => {
        dispatch(sendMessage(value))
        setValue('')
    }
    return <div className={styles.wrapper}>
        <textarea value={value} onChange={handleChange} className={styles.textarea}/>
        <button onClick={handleClick} className={styles.button}>Отправить</button>
    </div>
}
