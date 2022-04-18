import { ThunkAction } from "redux-thunk"
import { authAPI } from "../../api/api"
import { TGlobalState } from "../reduxStore"

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

type TState = typeof initialState
type TAction = TSetAuthUserDataAction | TSetAuthErrorAction | TetCaptchaAction
type TPayload = {
    id: number | null
    email: string | null
    login: string | null
    isLogged: boolean
}

const authReducer = (state = initialState, action:TAction):TState => {
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

type TSetAuthUserDataAction = {
    type: typeof SET_AUTH_USER_DATA
    payload: TPayload
}
type TSetAuthErrorAction = {
    type: typeof SET_AUTH_ERROR
    errorMessage: object
}
type TetCaptchaAction = {
    type: typeof SET_CAPTCHA
    captchaURL: string
}
type TData = {
    resultCode: number
    messages: object
    data: {
        id: number
        email: string
        login: string
    }
}

const setAuthUserData = (id:number, email:string, login:string, isLogged:boolean) :TSetAuthUserDataAction => (
    { type: SET_AUTH_USER_DATA, payload: {id, email, login, isLogged}
})
const setAuthError = (errorMessage:object) :TSetAuthErrorAction => ({ type: SET_AUTH_ERROR, errorMessage })
const setCaptcha = (captchaURL:string) :TetCaptchaAction => ({ type: SET_CAPTCHA, captchaURL })

type TThunkAction = ThunkAction<Promise<void>, TGlobalState, unknown, TAction>

export const getAuthThunk = (): TThunkAction => (dispatch) => {
    return authAPI.getAuth().then((data:TData) => {
        let { id, email, login } = data.data
        data.resultCode === 0 && dispatch(setAuthUserData(id, email, login, true))
    })
}

type TResponse = { data: {url: string} }

export const loginThunk = (loginData: object): TThunkAction => (dispatch) => {
    return authAPI.login(loginData).then((data:TData) => {
        if (data.resultCode === 0) {
            return dispatch(getAuthThunk())
        } else if (data.resultCode === 10) {
            authAPI.getCaptcha().then((res: TResponse) => {
                dispatch(setCaptcha(res.data.url))
            })
        } else if (data.resultCode !== 0) {
            return dispatch(setAuthError(data.messages))
        }

    })
}

export const logoutThunk = ():TThunkAction => (dispatch) => {
    return authAPI.logout().then((data:TData) => {
        data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false))
    })
}

export default authReducer;