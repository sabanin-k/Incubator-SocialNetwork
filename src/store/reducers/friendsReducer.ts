import { userAPI } from "../../api/api";

const GET_FOLLOWED_FRIENDS = 'friends/GET-FOLLOWED-FRIENDS'

const initialState = {
    friends: [],
    totalFriends: 0
}

type StateType = typeof initialState
type ActionType = {
    type: string
    payload: PayloadType
}
type PayloadType = {
    friends: Array<object>
    totalFriends: number
}

const friendsOnlineReducer = (state = initialState, action: ActionType): StateType => {
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

type GetFollowedFriendsActionType = {
    type: typeof GET_FOLLOWED_FRIENDS
    payload: PayloadType
}

const getFollowedFriendsAC = (friends: Array<object>, totalFriends:number) :GetFollowedFriendsActionType => (
    { type: GET_FOLLOWED_FRIENDS, payload: { friends, totalFriends } })

export const getFollowedFriends = () => async (dispatch: any) => {
    const response = await userAPI.getFriends();
    dispatch(getFollowedFriendsAC(response.items, response.totalCount))
}

export default friendsOnlineReducer;