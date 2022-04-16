import { authAPI } from "../../api/api"

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA'
const SET_AUTH_ERROR = 'auth/SET-AUTH-ERROR'
const SET_CAPTCHA = 'auth/SET-CAPTCHA'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogged: false,
    errorMessage: null as object | null,
    captchaURL: null as string | null
}

type StateType = typeof initialState
type ActionType = {
    type: string
    payload: PayloadType
    errorMessage: object
    captchaURL: string
}
type PayloadType = {
    id: number
    email: string
    login: string
    isLogged: boolean
}


const authReducer = (state = initialState, action:ActionType):StateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state
    }
}

type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: PayloadType
}
type SetAuthErrorActionType = {
    type: typeof SET_AUTH_ERROR
    errorMessage: object
}
type SetCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captchaURL: string
}
type DataType = {
    resultCode: number
    messages: object
    data: {
        id: number
        email: string
        login: string
    }
}

const setAuthUserData = (id:number, email:string, login:string, isLogged:boolean) :SetAuthUserDataActionType => (
    { type: SET_AUTH_USER_DATA, payload: {id, email, login, isLogged}
})
const setAuthError = (errorMessage:object) :SetAuthErrorActionType => ({ type: SET_AUTH_ERROR, errorMessage })
const setCaptcha = (captchaURL:string) :SetCaptchaActionType => ({ type: SET_CAPTCHA, captchaURL })

export const getAuthThunk = () => (dispatch:any) => {
    return authAPI.getAuth().then((data:DataType) => {
        let { id, email, login } = data.data
        data.resultCode === 0 && dispatch(setAuthUserData(id, email, login, true))
    })
}

export const loginThunk = (loginData: object) => (dispatch: any) => {
    return authAPI.login(loginData).then((data:DataType) => {
        if (data.resultCode === 0) {
            return dispatch(getAuthThunk())
        } else if (data.resultCode === 10) {
            authAPI.getCaptcha().then((res:any) => {
                dispatch(setCaptcha(res.data.url))
            })
        } else if (data.resultCode !== 0) {
            return dispatch(setAuthError(data.messages))
        }

    })
}

export const logoutThunk = () => (dispatch:any) => {
    return authAPI.logout().then((data:DataType) => {
        data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false))
    })
}

export default authReducer;