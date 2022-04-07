import { profileAPI } from "../../api/api";

const inititalState = {
    userProfile: null,
    status: ''
}

const UserProfileReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'GET-USER-PROFILE':
            return {
                ...state,
                userProfile: action.userProfile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.statusMessage
            }
        case 'GET-STATUS':
            return {
                ...state,
                status: action.statusMessage
            }
        default:
            return state;
    }
}

const getUserProfile = (userProfile) => ({ type: 'GET-USER-PROFILE', userProfile })
const setStatus = (statusMessage) => ({ type: 'SET-STATUS', statusMessage })
const getStatus = (statusMessage) => ({ type: 'GET-STATUS', statusMessage })

export const getUserProfileThunk = (match) => {
    return (dispatch) => {
        let userId = match != null ? match.params.userId : 23081
        profileAPI.getProfile(userId).then(data => {
            dispatch(getUserProfile(data))
        })
    }
}

export const updateStatusThunk = (statusMessage) => {
    return (dispatch) => {
        profileAPI.setStatus(statusMessage).then(data => {
            data.resultCode === 0 && dispatch(setStatus(statusMessage))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(getStatus(response.data))
        })
    }
}

export default UserProfileReducer;