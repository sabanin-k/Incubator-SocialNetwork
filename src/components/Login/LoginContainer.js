import { connect } from "react-redux"
// import { Navigate } from "react-router-dom"
import Login from "./Login"
import { loginThunk, getAuthThunk } from '../../store/reducers/authReducer';
import { getCaptchaURL, getErrorMessage, getIsLogged } from "../../store/selectors/authSelector";

const LoginContainer = (props) => {
    // if (props.isLogged) return <Navigate to={'/profile'}/>
    return (
        <Login 
            isLogged={props.isLogged}
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