import { TReturnActionType } from "../reduxStore"

const ADD_POST = 'profile/ADD-POST',
    PRESS_LIKE = 'profile/PRESS-LIKE'

const initialState = {
    posts: [
        { id: 1, text: 'Lorem ipsum dolor sit amet.', likes: 19, onLike: false },
        { id: 2, text: 'Lorem ipsum dolor', likes: 15, onLike: false }
    ],
    updateInput: ''
}

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

export const actionCreators = {
    addPost: (valueOfInput:string) => ({ type: ADD_POST, postText: valueOfInput } as const),
    pressLike: (id: number) => ({ type: PRESS_LIKE, id } as const)
}

export default profileReducer;


type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>
export type TPost = {
    id: number
    text: string
    likes: number
    onLike: boolean
}