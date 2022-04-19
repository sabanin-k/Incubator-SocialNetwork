import { ThunkAction } from "redux-thunk"
import { authAPI } from "../../api/api"
import { TGlobalState, TReturnActionType } from "../reduxStore"

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

type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>
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
    errorMessage: string
}
type TetCaptchaAction = {
    type: typeof SET_CAPTCHA
    captchaURL: string
}
type TData = {
    resultCode: number
    messages: string
    data: {
        id: number
        email: string
        login: string
    }
}

const actionCreators = {
    setAuthUserData: (id:number, email:string, login:string, isLogged:boolean) :TSetAuthUserDataAction => (
        { type: SET_AUTH_USER_DATA, payload: {id, email, login, isLogged}
    } as const),
    setAuthError: (errorMessage:string) :TSetAuthErrorAction => ({ type: SET_AUTH_ERROR, errorMessage } as const),
    setCaptcha: (captchaURL:string) :TetCaptchaAction => ({ type: SET_CAPTCHA, captchaURL } as const)

}


export type TAuthThunkAction = ThunkAction<Promise<void>, TGlobalState, unknown, TAction>

export const getAuthThunk = (): TAuthThunkAction => (dispatch) => {
    return authAPI.getAuth().then((data:TData) => {
        let { id, email, login } = data.data
        data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(id, email, login, true))
    })
}

type TResponse = { data: {url: string} }

export const loginThunk = (loginData: object): TAuthThunkAction => (dispatch) => {
    return authAPI.login(loginData).then((data:TData) => {
        if (data.resultCode === 0) {
            return dispatch(getAuthThunk())
        } else if (data.resultCode === 10) {
            authAPI.getCaptcha().then((res: TResponse) => {
                dispatch(actionCreators.setCaptcha(res.data.url))
            })
        } else if (data.resultCode !== 0) {
            return dispatch(actionCreators.setAuthError(data.messages))
        }

    })
}

export const logoutThunk = ():TAuthThunkAction => (dispatch) => {
    return authAPI.logout().then((data:TData) => {
        data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(null, null, null, false))
    })
}

export default authReducer;