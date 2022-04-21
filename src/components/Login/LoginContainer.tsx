import React, { FC } from 'react'
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { loginThunk, getAuthThunk } from '../../store/reducers/authReducer';
import { TGlobalState } from '../../store/reduxStore';
import { getCaptchaURL, getErrorMessage, getIsLogged } from "../../store/selectors/authSelector";
import Login from "./Login"

type TProps = TStateToProps & TDispatchProps

const LoginContainer: FC<TProps> = ({ isLogged, loginThunk, getAuthThunk, errorMessage, captchaURL }) => {
    if (isLogged) return <Navigate to={'/profile'} />

    return <Login login={loginThunk}
            getAuth={getAuthThunk}
            errorMessage={errorMessage}
            captchaURL={captchaURL} />
}

const mapStateToProps = (state: TGlobalState) => ({
    isLogged: getIsLogged(state),
    errorMessage: getErrorMessage(state),
    captchaURL: getCaptchaURL(state)
})

type TStateToProps = {
    isLogged: boolean
    errorMessage: string[]
    captchaURL: string
}
type TDispatchProps = {
    loginThunk: (loginData: object) => any
    getAuthThunk: () => void
}

export default connect<TStateToProps, TDispatchProps>(mapStateToProps, { loginThunk, getAuthThunk })(LoginContainer)