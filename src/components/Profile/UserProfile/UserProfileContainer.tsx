import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfileThunk, setPhoto, setProfileDataThunk } from "../../../store/reducers/userProfileReducer";
import UserProfile from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getUserProfile } from "../../../store/selectors/userProfileSelector";
import { TGlobalState } from "../../../store/reduxStore";
import { TSetProfileData, TUserProfile } from "../../../types/types";

const UserProfileContainer: FC<TProps> = ({ userProfile, match, authId, getUserProfileThunk, setPhoto, setProfileDataThunk }) => {
    const matchUserId = match != null ? match.params.userId : authId
    useEffect(() => {
        getUserProfileThunk(matchUserId)
    }, [matchUserId, getUserProfileThunk])

    return <UserProfile setPhoto={setPhoto} authId={authId} {...userProfile} setProfileDataThunk={setProfileDataThunk}/>
}

const mapStateToProps = (state: TGlobalState) => ({
    userProfile: getUserProfile(state),
    authId: state.auth.id
})

export default compose<React.Component>(
    connect(mapStateToProps, { getUserProfileThunk, setPhoto, setProfileDataThunk }),
    withNavigateToLogin,
    withMatchToProps
)(UserProfileContainer)


type TMatch = {params: {userId: number}}
type TProps = {
    userProfile: TUserProfile
    match: TMatch
    authId: number
    getUserProfileThunk: (matchUserId: number) => void
    setPhoto: (photoFile: any) => void
    setProfileDataThunk: (profileData: TSetProfileData) => void
}
