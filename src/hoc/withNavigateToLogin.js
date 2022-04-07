import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const withNavigateToLogin = (Component) => {
    const WrapperComponent = (props) => {
        if (props.initialized && !props.isLogged) return <Navigate to='/login' />
        return (
            <Component {...props}/>
        )   
    }

    return connect(mapStateToProps)(WrapperComponent);
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    initialized: state.app.initialized
})

export default withNavigateToLogin;
