import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { loginThunk, getAuthThunk } from '../../store/reducers/authReducer.ts';
import { getCaptchaURL, getErrorMessage, getIsLogged } from "../../store/selectors/authSelector";
import Login from "./Login"

const LoginContainer = (props) => {
    if (props.isLogged) return <Navigate to={'/profile'}/>

    return (
        <Login
            login={props.loginThunk}
            getAuth={props.getAuthThunk}
            errorMessage={props.errorMessage}
            captchaURL={props.captchaURL} />
    )
}

const mapStateToProps = (state) => ({
    isLogged: getIsLogged(state),
    errorMessage: getErrorMessage(state),
    captchaURL: getCaptchaURL(state)
})

export default connect(mapStateToProps, { loginThunk, getAuthThunk })(LoginContainer)