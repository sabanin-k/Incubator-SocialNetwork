import React, { FC } from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { TGlobalState } from "../store/reduxStore";
import { getIsLogged } from "../store/selectors/authSelector";
import { getUserProfile } from "../store/selectors/userProfileSelector";

const withMatchToProps = (Component: FC<any>) => {
    const WrapperComponent = (props: TProps) => {
        const match = useMatch('/users/:userId/');
        return (
            <Component {...props} match={match} />
        )
    }
    return connect(mapStateToProps)(WrapperComponent)
}

const mapStateToProps = (state: TGlobalState) => ({
    userProfile: getUserProfile(state),
    isLogged: getIsLogged(state)
})

export default withMatchToProps;

type TProps = ReturnType<typeof mapStateToProps>