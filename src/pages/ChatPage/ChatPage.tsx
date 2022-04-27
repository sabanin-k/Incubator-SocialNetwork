import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startChatListener } from '../../store/reducers/chatReducer'
import { InputMessage } from './InputMessage/InputMessage'
import { Messages } from './Messages/Messages'

const ChatPage: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startChatListener())
    }, [dispatch])
    return (
        <>
            <Messages />
            <InputMessage />
        </>
    )
}

export default ChatPage