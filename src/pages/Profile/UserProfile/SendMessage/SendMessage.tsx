import React, { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../../../store/reducers/dialogsReducer'

export const SendMessage: FC<TProps> = ({ userId, isOwner }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [isTyping, setTyping] = useState(false)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleClick = () => {
        dispatch(sendMessage(userId, value))
        setValue('')
    }

    return (
        !isOwner && <div>
            {!isTyping
            ? <span onClick={() => setTyping(true)}>Написать сообщение</span>
            : <div>
                <input type="text" autoFocus value={value} onChange={handleChange} />
                <button onClick={handleClick}>Отправить</button>                
            </div> }
        </div>
    )
}


type TProps = {
    userId: number
    isOwner: boolean
}