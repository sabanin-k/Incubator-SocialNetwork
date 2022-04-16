const WRITE_MESSAGE: string = 'dialogs/WRITE-MESSAGE'
const PRESS_DELETE: string = 'dialogs/PRESS-DELETE'

type FriendType = { name: string, id: number, avaLink: string }
type MessageType = { message: string, id: number }
type ActionType = { type: string, message: string, id: number }

const initialState = {
    friends: [
        { name: 'Friend1', id: 1, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend2', id: 2, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend3', id: 3, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend4', id: 4, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend5', id: 5, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
    ] as FriendType[],
    messages: [
        { message: 'Lorem ipsum dolor sit amet.', id: 1 },
        { message: 'Lorem ipsum dolor amet.', id: 2 },
        { message: 'Lorem ipsum dolor.', id: 3 }
    ] as MessageType[],
    updateInput: '' as string
}
type StateType = typeof initialState

const dialogsReducer = (state: StateType = initialState, action: ActionType): any => {
    switch (action.type) {
        case WRITE_MESSAGE:
            const newMessage = { message: action.message, id: Math.random() }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        case PRESS_DELETE:
            return {
                ...state,
                messages: state.messages.map((item: {message: string, id: number}) => {
                    if (item.id === action.id) {
                        const index = state.messages.findIndex(elem => item.id === elem.id)
                        return [...state.messages.slice(0, index), ...state.messages.slice(index + 1)]
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

type WriteMessageType = (message: string) => { type: typeof WRITE_MESSAGE, message: string }
type DeleteMessageType = (id: number) => { type: typeof PRESS_DELETE, id: number }

export const writeMessage: WriteMessageType = (message) => ({ type: WRITE_MESSAGE, message })

export const deleteMessage: DeleteMessageType = (id) => ({ type: PRESS_DELETE, id })

export default dialogsReducer;