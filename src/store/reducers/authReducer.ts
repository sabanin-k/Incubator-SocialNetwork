import { authAPI } from "../../api/authAPI"
import { TThunkAction } from "../../types/types"
import { TReturnActionType } from "../reduxStore"

const SET_AUTH_USER_DATA = 'auth/SET-AUTH-USER-DATA'
const SET_AUTH_ERROR = 'auth/SET-AUTH-ERROR'
const SET_CAPTCHA = 'auth/SET-CAPTCHA'

const initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLogged: false,
    errorMessage: null as string | null,
    captchaURL: null as string | null
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

const actionCreators = {
    setAuthUserData: (id:number, email:string, login:string, isLogged:boolean) => (
        { type: SET_AUTH_USER_DATA, payload: {id, email, login, isLogged}
    } as const),
    setAuthError: (errorMessage:string) => ({ type: SET_AUTH_ERROR, errorMessage } as const),
    setCaptcha: (captchaURL:string) => ({ type: SET_CAPTCHA, captchaURL } as const)

}

export const getAuthThunk = (): TThunk => (dispatch) => {
    return authAPI.getAuth().then((data:TData) => {
        let { id, email, login } = data.data
        data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(id, email, login, true))
    })
}

export const loginThunk = (loginData: object): TThunk => (dispatch) => {
    return authAPI.login(loginData).then((data:TData) => {
        if (data.resultCode === 0) {
            return dispatch(getAuthThunk())
        } else if (data.resultCode === 10) {
            authAPI.getCaptcha().then((data: TCaptchaData) => {
                dispatch(actionCreators.setCaptcha(data.url))
            })
        } else if (data.resultCode !== 0) {
            return dispatch(actionCreators.setAuthError(data.messages))
        }

    })
}

export const logoutThunk = ():TThunk => (dispatch) => {
    return authAPI.logout().then((data:TData) => {
        data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(null, null, null, false))
    })
}

export default authReducer;

type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>
type TData = {
    resultCode: number
    messages: string
    data: {
        id: number
        email: string
        login: string
    }
}
type TThunk = TThunkAction<TAction>
type TCaptchaData = { url: string }