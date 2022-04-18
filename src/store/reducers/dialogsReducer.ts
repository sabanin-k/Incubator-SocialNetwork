const WRITE_MESSAGE = 'dialogs/WRITE-MESSAGE'
const PRESS_DELETE = 'dialogs/PRESS-DELETE'

export type TDialogsFriend = { name: string, id: number, avaLink: string }
export type TDialogsMessage = { message: string, id: number }

const initialState = {
    friends: [
        { name: 'Friend1', id: 1, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend2', id: 2, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend3', id: 3, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend4', id: 4, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend5', id: 5, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
    ] as TDialogsFriend[],
    messages: [
        { message: 'Lorem ipsum dolor sit amet.', id: 1 },
        { message: 'Lorem ipsum dolor amet.', id: 2 },
        { message: 'Lorem ipsum dolor.', id: 3 }
    ] as TDialogsMessage[],
    updateInput: '' as string
}

type TState = typeof initialState
type TAction = TWriteMessageAction | TDeleteMessageAction

const dialogsReducer = (state = initialState, action: TAction): TState | any => { // this 'any' because of 'messages' in Action
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

type TWriteMessageAction = {type: typeof WRITE_MESSAGE, message: string}
type TDeleteMessageAction = {type: typeof PRESS_DELETE, id: number}

export const writeMessage = (message: string): TWriteMessageAction => ({ type: WRITE_MESSAGE, message })

export const deleteMessage = (id: number): TDeleteMessageAction => ({ type: PRESS_DELETE, id })

export default dialogsReducer;