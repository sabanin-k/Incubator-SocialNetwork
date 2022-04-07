import { connect } from "react-redux";
import { useMatch } from "react-router-dom";

const withMatchToProps = (AnyComponent) => {
    const WrapperComponent = (props) => {
        const match = useMatch('/users/:userId/');
        return (
            <AnyComponent {...props} match={match} />
        )
    }
    return connect(mapStateToProps)(WrapperComponent)
}

const mapStateToProps = (state) => ({
    userProfile: state.userProfilePage.userProfile,
    isLogged: state.auth.isLogged
})

export default withMatchToProps;

