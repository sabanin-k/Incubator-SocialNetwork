import { userAPI } from "../../api/api";

const GET_FOLLOWED_FRIENDS = 'GET-FOLLOWED-FRIENDS'

const initialState = {
    friends: []
}

const friendsOnlineReducer = (state = initialState, action) => {
    switch(action.type) {
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

const getFollowedFriendsAC = (friends, totalFriends) => ({type: GET_FOLLOWED_FRIENDS, payload: {friends, totalFriends}})

export const getFollowedFriends = () => async (dispatch) => {
    const response = await userAPI.getFriends();
    dispatch(getFollowedFriendsAC(response.items, response.totalCount))
}

export default friendsOnlineReducer;