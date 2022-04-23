import React, { FC } from 'react'
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { TLoginValues } from '../../api/authAPI';
import { loginThunk, getAuthThunk, TAuthAction } from '../../store/reducers/authReducer';
import { TGlobalState } from '../../store/reduxStore';
import { getCaptchaURL, getErrorMessage, getIsLogged } from "../../store/selectors/authSelector";
import { TThunkAction } from '../../types/types';
import Login from "./Login"

const LoginContainer: FC<TProps> = ({ isLogged, loginThunk, errorMessage, captchaURL }) => {
    if (isLogged) return <Navigate to={'/profile'} />

    return <Login login={loginThunk}
            errorMessage={errorMessage}
            captchaURL={captchaURL} />
}

const mapStateToProps = (state: TGlobalState) => ({
    isLogged: getIsLogged(state),
    errorMessage: getErrorMessage(state),
    captchaURL: getCaptchaURL(state)
})

export default connect<TStateToProps, TDispatchProps>(mapStateToProps, { loginThunk })(LoginContainer)


type TProps = TStateToProps & TDispatchProps
type TStateToProps = ReturnType<typeof mapStateToProps>
type TDispatchProps = {
    loginThunk: (loginData: TLoginValues) => TThunkAction<TAuthAction, void>
}