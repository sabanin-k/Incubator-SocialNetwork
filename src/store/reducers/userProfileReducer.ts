import { TGlobalState } from './../reduxStore';
import { ThunkAction } from 'redux-thunk';
import { profileAPI } from "../../api/api";
import { TPhotos, TSetProfileData, TUserProfile } from "../../types/types";

const GET_USER_PROFILE = 'userProfile/GET-USER-PROFILE',
    GET_STATUS = 'userProfile/GET-STATUS',
    SET_PHOTO = 'userProfile/SET-PHOTO';

const inititalState = {
    userProfile: null as TUserProfile | null,
    status: ''
}

type TState = typeof inititalState
type TAction = TGetUserProfileAction | TGetStatusAction | TSetPhotoSuccesAction

const UserProfileReducer = (state = inititalState, action:TAction) :TState => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.statusMessage
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

type TGetUserProfileAction = {type: typeof GET_USER_PROFILE, userProfile: TUserProfile}
type TGetStatusAction = {type: typeof GET_STATUS, statusMessage: string}
type TSetPhotoSuccesAction = {type: typeof SET_PHOTO, photoFiles: TPhotos}

const getUserProfile = (userProfile: TUserProfile) :TGetUserProfileAction => ({ type: GET_USER_PROFILE, userProfile })
const getStatus = (statusMessage:string) :TGetStatusAction => ({ type: GET_STATUS, statusMessage })
const setPhotoSucces = (photoFiles: TPhotos) :TSetPhotoSuccesAction => ({ type: SET_PHOTO, photoFiles })

type TThunkAction = ThunkAction<void, TGlobalState, unknown, TAction>

export const getUserProfileThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data: TUserProfile) => {
            dispatch(getUserProfile(data))
        })
        profileAPI.getStatus(userId).then((data: string) => {
            dispatch(getStatus(data))
        })
    }
}

export const updateStatusThunk = (statusMessage: string): TThunkAction => {
    return (dispatch) => {
        profileAPI.setStatus(statusMessage).then((data: {resultCode: number}) => {
            data.resultCode === 0 && dispatch(getStatus(statusMessage))
        })
    }
}

export const getStatusThunk = (userId: number): TThunkAction => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data: string) => {
            dispatch(getStatus(data))
        })
    }
}

export const setProfileDataThunk = (profileData: TSetProfileData): TThunkAction => (dispatch, getState) => {
    const userId: number = getState().auth.id;
    return profileAPI.setProfile(profileData).then((data: {resultCode: number}) => {
        data.resultCode === 0 && dispatch(getUserProfileThunk(userId))
    })
}

type TSetPhotoData = {
    data: {
        photos: TPhotos
    }
    resultCode: number
}

export const setPhoto = (photoFile: any): TThunkAction => (dispatch) => {
    return profileAPI.setPhoto(photoFile).then((data: TSetPhotoData) => {
        data.resultCode === 0 && dispatch(setPhotoSucces(data.data.photos))
    })
}

export default UserProfileReducer;