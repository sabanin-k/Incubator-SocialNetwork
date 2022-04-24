import dialogsReducer, { deleteMessage, TDialogsState, writeMessage } from "../reducers/dialogsReducer"

let state: TDialogsState

beforeEach(() => {
    state = {
        friends: [
            { name: 'Friend1', id: 1, avaLink: 'any link' }
        ],
        messages: [
            { message: 'Lorem ipsum dolor sit amet.', id: 1 }
        ],
        updateInput: ' '
    }
})

test('writeMessage action works', () => {
    expect(dialogsReducer(state, writeMessage('test')).messages.length).toEqual(2)
})

test('deleteMessage works', () => {
    expect(dialogsReducer(state, deleteMessage(1)).messages.length).toEqual(0)
})