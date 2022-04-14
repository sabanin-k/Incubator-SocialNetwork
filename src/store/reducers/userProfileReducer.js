import { profileAPI } from "../../api/api";

const GET_USER_PROFILE = 'GET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS',
    GET_STATUS = 'GET-STATUS',
    SET_PROFILE_DATA = 'SET-PROFILE-DATA',
    SET_PHOTO = 'SET-PHOTO';

const inititalState = {
    userProfile: null,
    status: ''
}

const UserProfileReducer = (state = inititalState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.statusMessage
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.statusMessage
            }
        case SET_PROFILE_DATA:
            return {
                ...state
            }
        case SET_PHOTO:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.photoFiles
                }
            }
        default:
            return state;
    }
}

const getUserProfile = (userProfile) => ({ type: GET_USER_PROFILE, userProfile })
const setStatus = (statusMessage) => ({ type: SET_STATUS, statusMessage })
const getStatus = (statusMessage) => ({ type: GET_STATUS, statusMessage })
const setPhotoSucces = (photoFiles) => ({ type: SET_PHOTO, photoFiles })

export const getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(getUserProfile(data))
        })
        profileAPI.getStatus(userId).then(response => {
            dispatch(getStatus(response.data))
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

export const setProfileDataThunk = (profileData) => (dispatch, getState) => {
    const userId = getState().auth.id;
    return profileAPI.setProfile(profileData).then(data => {
        data.resultCode === 0 && dispatch(getUserProfileThunk(userId))
    })
}

export const setPhoto = (photoFile) => (dispatch) => {
    return profileAPI.setPhoto(photoFile).then(data => {
        data.resultCode === 0 && dispatch(setPhotoSucces(data.data.photos))
    })
}

export default UserProfileReducer;