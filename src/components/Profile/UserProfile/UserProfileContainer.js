import { connect } from "react-redux";
import { useEffect } from "react";
import { getUserProfileThunk, setProfileDataThunk, setPhoto } from "../../../store/reducers/userProfileReducer.ts";
import UserProfile from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { compose } from "redux";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getUserProfile } from "../../../store/selectors/userProfileSelector";

const UserProfileContainer = ({userProfile, match, authId, getUserProfileThunk, setPhoto, setProfileDataThunk }) => {
    
    const matchUserId = match != null ? match.params.userId : authId
    useEffect(() => {
        getUserProfileThunk(matchUserId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchUserId])

    return <UserProfile setPhoto={setPhoto} authId={authId} {...userProfile} />
}

const mapStateToProps = (state) => ({
    userProfile: getUserProfile(state),
    authId: state.auth.id
})

export default compose(
    connect(mapStateToProps, { getUserProfileThunk, setProfileDataThunk, setPhoto }),
    withNavigateToLogin,
    withMatchToProps
)(UserProfileContainer)
