import { Dispatch } from "redux"
import { TMessages, webSocket } from "../../api/wsAPI"
import { TThunkAction } from "../../types/types"
import { TReturnActionType } from "../reduxStore"

const MESSAGES_RECEIVED = 'chat/MESSAGE-RECEIVED'
const MESSAGES_REMOVED = 'chat/MESSAGE-REMOVED'

const initialState = {
    messages: [] as TMessages[]
}

const chatReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            } 
        case MESSAGES_REMOVED:
            return {
                ...state,
                messages: []
            }
        default:
            return state
    }
}

const actionCreators = {
    messagesReceived: (messages: TMessages[]) => ({type: MESSAGES_RECEIVED, messages} as const),
    messagesRemoved: () => ({type: MESSAGES_REMOVED} as const)
}

let _handleDM: ((messages: TMessages[]) => void) | null = null
const handleDispatchMessages = (dispatch: Dispatch) => {
    if (_handleDM === null) {
        return (
            _handleDM = (messages) => dispatch(actionCreators.messagesReceived(messages))
        )
    }
    return _handleDM
}

export const startChatListener = (): TThunk => (dispatch) => {
    webSocket.start()
    webSocket.subscribe(handleDispatchMessages(dispatch))
}
export const stopChatListener = (): TThunk => (dispatch) => {
    webSocket.stop()
    webSocket.unsubscribe(handleDispatchMessages(dispatch))
    dispatch(actionCreators.messagesRemoved())
}
export const sendMessage = (message: string): TThunk => (dispatch) => {
    webSocket.sendMessage(message)
}

export default chatReducer


type TAction = TReturnActionType<typeof actionCreators>
type TThunk = TThunkAction<TAction, void>