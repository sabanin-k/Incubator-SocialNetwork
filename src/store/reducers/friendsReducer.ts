import { TThunkAction, TUser } from "../../types/types";
import { usersAPI } from "../../api/usersAPI";

const GET_FOLLOWED_FRIENDS = 'friends/GET-FOLLOWED-FRIENDS'

const initialState = {
    friends: [] as TUser[],
    totalFriends: 0
}

type TState = typeof initialState
type TAction = TGetFollowedFriendsAction
type TPayload = {
    friends: TUser[]
    totalFriends: number
}

const friendsReducer = (state = initialState, action: TAction): TState => {
    switch (action.type) {
        case (GET_FOLLOWED_FRIENDS):
            return ({
                ...state,
                friends: action.payload.friends,
                totalFriends: action.payload.totalFriends
            })
        default:
            return state;
    }
}

type TGetFollowedFriendsAction = {
    type: typeof GET_FOLLOWED_FRIENDS
    payload: TPayload
}

const getFollowedFriendsAC = (friends: TUser[], totalFriends:number) :TGetFollowedFriendsAction => (
    { type: GET_FOLLOWED_FRIENDS, payload: { friends, totalFriends } })

type TThunk = TThunkAction<TAction>
type TResponse = {items: TUser[], totalCount: number}

export const getFollowedFriends = ():TThunk => async (dispatch) => {
    const response: TResponse = await usersAPI.getFriends();
    dispatch(getFollowedFriendsAC(response.items, response.totalCount))
}

export default friendsReducer;