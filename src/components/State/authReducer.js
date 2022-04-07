import { authAPI } from "../../api/api"

const initialState = {
    id: null,
    email: null,
    login: null,
    isLogged: false,
    error: null,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'SET-AUTH-ERROR':
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        case 'SET-CAPTCHA':
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        default:
            return state
    }
}

const setAuthUserData = (id, email, login, isLogged) => ({ type: 'SET-AUTH-USER-DATA', payload: { id, email, login, isLogged } })
const setAuthError = (errorMessage) => ({ type: 'SET-AUTH-ERROR', errorMessage })
const setCaptcha = (captchaURL) => ({ type: 'SET-CAPTCHA', captchaURL })

export const getAuthThunk = () => (dispatch) => {
    return authAPI.getAuth().then(data => {
        let { id, email, login } = data.data
        data.resultCode === 0 && dispatch(setAuthUserData(id, email, login, true))
    })
}

export const loginThunk = (loginData) => (dispatch) => {
    authAPI.login(loginData).then(data => {
        if (data.resultCode === 0) {
            return dispatch(setAuthUserData())
        } else if (data.resultCode === 10) {
            authAPI.getCaptcha().then(res => {
                dispatch(setCaptcha(res.data.url))
            })
            return dispatch(setCaptcha(data))
        } else if (data.resultCode !== 0) {
            return dispatch(setAuthError(data.messages))
        }

    })
}

export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(data => {
        data.resultCode === 0 && dispatch(setAuthUserData(null, null, null, false))
    })
}

export default authReducer;