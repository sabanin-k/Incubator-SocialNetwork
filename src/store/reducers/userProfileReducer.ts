import { profileAPI } from "../../api/api";

const GET_USER_PROFILE = 'userProfile/GET-USER-PROFILE',
    SET_STATUS = 'userProfile/SET-STATUS',
    GET_STATUS = 'userProfile/GET-STATUS',
    SET_PROFILE_DATA = 'userProfile/SET-PROFILE-DATA',
    SET_PHOTO = 'userProfile/SET-PHOTO';

const inititalState = {
    userProfile: null,
    status: ''
}

type StateType = typeof inititalState
type ActionType = {
    type: string
    userProfile: object
    statusMessage: string
    photoFiles: object
}

const UserProfileReducer = (state = inititalState, action:ActionType) :StateType => {
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

type GetUserProfileActionType = {type: typeof GET_USER_PROFILE, userProfile: object}
type GetStatusActionType = {type: typeof GET_STATUS, statusMessage: string}
type SetPhotoSuccesActionType = {type: typeof SET_PHOTO, photoFiles: object}

const getUserProfile = (userProfile: object) :GetUserProfileActionType => ({ type: GET_USER_PROFILE, userProfile })
const getStatus = (statusMessage:string) :GetStatusActionType => ({ type: GET_STATUS, statusMessage })
const setPhotoSucces = (photoFiles) :SetPhotoSuccesActionType => ({ type: SET_PHOTO, photoFiles })

export const getUserProfileThunk = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId).then((data: object) => {
            dispatch(getUserProfile(data))
        })
        profileAPI.getStatus(userId).then((data: string) => {
            dispatch(getStatus(data))
        })
    }
}

export const updateStatusThunk = (statusMessage: string) => {
    return (dispatch: any) => {
        profileAPI.setStatus(statusMessage).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(getStatus(statusMessage))
        })
    }
}

export const getStatusThunk = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then((data: string) => {
            dispatch(getStatus(data))
        })
    }
}

export const setProfileDataThunk = (profileData) => (dispatch, getState) => {
    const userId = getState().auth.id;
    return profileAPI.setProfile(profileData).then(data => {
        data.resultCode === 0 && dispatch(getUserProfileThunk(userId))
    })
}

type SetPhotoType = {
    data: {
        photos: object
    }
    resultCode: number
}

export const setPhoto = (photoFile: any) => (dispatch: any) => {
    return profileAPI.setPhoto(photoFile).then((data: SetPhotoType) => {
        data.resultCode === 0 && dispatch(setPhotoSucces(data.data.photos))
    })
}

export default UserProfileReducer;