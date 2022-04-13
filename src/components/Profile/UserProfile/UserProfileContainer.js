import { connect } from "react-redux";
import { useEffect } from "react";
import { getUserProfileThunk, setProfileDataThunk } from "../../../store/reducers/userProfileReducer";
import UserProfile from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { compose } from "redux";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getUserProfile } from "../../../store/selectors/userProfileSelector";

const UserProfileContainer = ({userProfile, match, authId, getUserProfileThunk, setProfileDataThunk }) => {
    const userId = match != null ? match.params.userId : authId
    useEffect(() => {
        getUserProfileThunk(userId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId])

    return <UserProfile userProfile={userProfile} />
}

const mapStateToProps = (state) => ({
    userProfile: getUserProfile(state),
    authId: state.auth.id
})

export default compose(
    connect(mapStateToProps, { getUserProfileThunk, setProfileDataThunk }),
    withNavigateToLogin,
    withMatchToProps
)(UserProfileContainer)
