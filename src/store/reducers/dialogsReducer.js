const initialState = {
    friends: [
        { name: 'Friend1', id: 1, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend2', id: 2, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend3', id: 3, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend4', id: 4, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend5', id: 5, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' }
    ],
    messages: [
        { message: 'Lorem ipsum dolor sit amet.', id: 1 },
        { message: 'Lorem ipsum dolor amet.', id: 2 },
        { message: 'Lorem ipsum dolor.', id: 3 }
    ],
    updateInput: ''
}

const reduceDialogs = (state = initialState, action) => {
    switch (action.type) {
        case 'WRITE-MESSAGE':
            const newMessage = { message: action.message, id: Math.random() }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        case 'PRESS-DELETE':
            return {
                ...state,
                messages: state.messages.map(item => {
                    if (item.id === action.id) {
                        const index = state.messages.findIndex(elem => item.id === elem.id)
                        return [...state.messages.slice(0, index), ...state.messages.slice(index + 1)];
                    }
                    return item
                })
            }
        default:
            return state;
    }
}

export const writeMessage = (message) => ({ type: 'WRITE-MESSAGE', message })

export const deleteMessage = (id) => ({ type: 'PRESS-DELETE', id})

export default reduceDialogs;
