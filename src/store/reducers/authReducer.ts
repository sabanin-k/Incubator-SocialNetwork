import { authAPI, TLoginValues } from "../../api/authAPI"
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
    errorMessage: null as string[] | null,
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
    setAuthError: (errorMessage:string[]) => ({ type: SET_AUTH_ERROR, errorMessage } as const),   
    setCaptcha: (captchaURL:string) => ({ type: SET_CAPTCHA, captchaURL } as const)
}

export const getAuthThunk = (): TThunkAction<TAction> => async (dispatch) => {
    const data = await authAPI.getAuth()
    const { id, email, login } = data.data
    data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(id, email, login, true))
}

export const loginThunk = (loginData: TLoginValues): TThunkAction<TAction, void> => async (dispatch) => {
    const data = await authAPI.login(loginData)
    switch (data.resultCode) {
        case 0: return dispatch(getAuthThunk())
        case 10: return authAPI.getCaptcha().then(data => {
            dispatch(actionCreators.setCaptcha(data.url))
        })
        default: return dispatch(actionCreators.setAuthError(data.messages))
    }
}

export const logoutThunk = (): TThunkAction<TAction> => async (dispatch) => {
    const data = await authAPI.logout()
    data.resultCode === 0 && dispatch(actionCreators.setAuthUserData(null, null, null, false))
}

export default authReducer;

type TState = typeof initialState
type TAction = TReturnActionType<typeof actionCreators>