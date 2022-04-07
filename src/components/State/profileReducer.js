const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', likes: 19, onLike: false },
        { id: 2, text: 'Lorem ipsum dolor', likes: 15, onLike: false }
    ],
    updateInput: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = { id: Math.random(), text: action.postText, likes: '0' }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case 'PRESS-LIKE':
            return {
                ...state,
                posts: state.posts.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            onLike: !item.onLike,
                            likes: item.onLike ? --item.likes : ++item.likes}
                    }

                    return item;
                })
            }
        default:
            return state;
    }
}

export const pressLike = (id) => ({ type: 'PRESS-LIKE', id })
export const addPost = (valueOfInput) => ({ type: 'ADD-POST', postText: valueOfInput })

export default profileReducer;