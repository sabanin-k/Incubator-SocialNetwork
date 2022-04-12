import { connect } from "react-redux";
import { useEffect } from "react";
import { getUserProfileThunk, setProfileDataThunk } from "../../../store/reducers/userProfileReducer";
import UserProfile from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { compose } from "redux";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getIsLogged } from "../../../store/selectors/authSelector";
import { getUserProfile } from "../../../store/selectors/userProfileSelector";

const UserProfileContainer = (props) => {
    const userId = props.match != null ? props.match.params.userId : 23081
    useEffect(() => {
        props.getUserProfileThunk(userId)
    }, [])

    return <UserProfile {...props} />
}

const mapStateToProps = (state) => ({
    userProfile: getUserProfile(state),
    isLogged: getIsLogged(state)
})

export default compose(
    connect(mapStateToProps, { getUserProfileThunk, setProfileDataThunk }),
    withNavigateToLogin,
    withMatchToProps
)(UserProfileContainer)

// export default connect(mapStateToProps, { getUserProfileThunk })( withNavigateToLogin(MatchToProps) )