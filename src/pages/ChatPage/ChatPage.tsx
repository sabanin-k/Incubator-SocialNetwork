import React, { FC, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage, startChatListener, stopChatListener } from '../../store/reducers/chatReducer'
import { getIsLogged } from '../../store/selectors/authSelector'
import { getChatMessagesSelector } from '../../store/selectors/chatSelector'
import { InputMessage } from './InputMessage/InputMessage'
import { Messages } from './Messages/Messages'

const ChatPage: FC = () => {
    const messages = useSelector(getChatMessagesSelector)
    const isLogged = useSelector(getIsLogged)
    const dispatch = useDispatch()
    const handleSendMessage = (message: string) => {
        dispatch(sendMessage(message))
    }
    useEffect(() => {
        dispatch(startChatListener())
        return () => {
            dispatch(stopChatListener())
        }
    }, [dispatch])

    return (
        <>
            {useMemo(() => { return <Messages messages={messages} />}, [messages])}
            {isLogged && <InputMessage handleSendMessage={handleSendMessage} />}
        </>
    )
}

export default ChatPage