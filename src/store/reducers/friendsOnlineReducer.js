const initialState = {
    friends: [
        { name: 'Friend1', id: 1, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend2', id: 2, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' },
        { name: 'Friend3', id: 3, avaLink: 'https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-260nw-426321556.jpg' }
    ]
}

const friendsOnlineReducer = (state = initialState, action) => {
    return state;
}

export default friendsOnlineReducer;