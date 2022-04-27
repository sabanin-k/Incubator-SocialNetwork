import { Dispatch } from "redux"
import { TMessages, webSocket } from "../../api/wsAPI"
import { TThunkAction } from "../../types/types"
import { TReturnActionType } from "../reduxStore"

const MESSAGE_RECEIVED = 'chat/MESSAGE-RECEIVED'

const initialState = {
    messages: [] as TMessages[]
}

const chatReducer = (state = initialState, action: TAction) => {
    switch (action.type) {
        case MESSAGE_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.messages]
            }         
        default:
            return state
    }
}

const actionCreators = {
    messageReceived: (messages: TMessages[]) => ({type: MESSAGE_RECEIVED, messages})
}

let _handleDM: ((messages: TMessages[]) => void) | null = null
const handleDispatchMessages = (dispatch: Dispatch) => {
    if (_handleDM === null) {
        return (
            _handleDM = (messages) => dispatch(actionCreators.messageReceived(messages))
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
}
export const sendMessage = (message: string): TThunk => (dispatch) => {
    webSocket.sendMessage(message)
}

export default chatReducer


type TAction = TReturnActionType<typeof actionCreators>
type TThunk = TThunkAction<TAction, void>