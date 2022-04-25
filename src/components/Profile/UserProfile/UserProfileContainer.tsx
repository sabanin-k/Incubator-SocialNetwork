import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { UserProfile } from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getAuthUserId } from "../../../store/selectors/authSelector";
import { getUserProfileThunk } from "../../../store/reducers/userProfileReducer";

const UserProfileContainer: FC<TProps> = ({ match }) => {
    const authId = useSelector(getAuthUserId)
    const dispatch = useDispatch()
    
    const matchUserId = match != null ? match.params.userId : authId
    useEffect(() => {
        dispatch(getUserProfileThunk(matchUserId))
    }, [matchUserId, dispatch])

    return <UserProfile />
}

export default compose<React.ComponentType>(
    withNavigateToLogin,
    withMatchToProps
)(UserProfileContainer)


type TMatch = {params: {userId: number}}
type TProps = { match: TMatch }
