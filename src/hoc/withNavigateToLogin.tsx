import React, { FC } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { TGlobalState } from "../store/reduxStore";

const withNavigateToLogin = (Component: React.ComponentType) => {
    const WrapperComponent: FC<any> = (props) => {
        if (props.initialized && !props.isLogged) return <Navigate to='/login' />
        return (
            <Component {...props}/>
        )   
    }

    return connect(mapStateToProps)(WrapperComponent);
}

const mapStateToProps = (state: TGlobalState) => ({
    isLogged: state.auth.isLogged,
    initialized: state.app.initialized
})

export default withNavigateToLogin;
