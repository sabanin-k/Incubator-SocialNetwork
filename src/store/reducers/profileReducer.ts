const ADD_POST = 'profile/ADD-POST',
    PRESS_LIKE = 'profile/PRESS-LIKE'

const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', likes: 19, onLike: false },
        { id: 2, text: 'Lorem ipsum dolor', likes: 15, onLike: false }
    ],
    updateInput: ''
}

export type TPost = {
    id: number
    text: string
    likes: number
    onLike: boolean
}

type TState = typeof initialState
type TAction = TAddPostTAction | TPressLikeTAction

const profileReducer = (state = initialState, action:TAction) :TState => {
    switch (action.type) {
        case ADD_POST:
            const newPost: TPost = { 
                id: Math.random(),
                text: action.postText,
                likes: 0,
                onLike: false }
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case PRESS_LIKE:
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

type TAddPostTAction = {type: typeof ADD_POST, postText: string}
type TPressLikeTAction = {type: typeof PRESS_LIKE, id: number}

export const addPost = (valueOfInput:string) :TAddPostTAction => ({ type: ADD_POST, postText: valueOfInput })
export const pressLike = (id: number) :TPressLikeTAction => ({ type: PRESS_LIKE, id })

export default profileReducer;