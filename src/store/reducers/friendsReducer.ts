import { ThunkAction } from "redux-thunk";
import { userAPI } from "../../api/api";
import { TUser } from "../../types/types";
import { TGlobalState } from "../reduxStore";

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

type TThunkAction = ThunkAction<void, TGlobalState, unknown, TAction>
type TResponse = {items: TUser[], totalCount: number}

export const getFollowedFriends = ():TThunkAction => async (dispatch) => {
    const response: TResponse = await userAPI.getFriends();
    dispatch(getFollowedFriendsAC(response.items, response.totalCount))
}

export default friendsReducer;