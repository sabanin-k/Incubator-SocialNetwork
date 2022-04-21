import React from "react"
import { connect } from "react-redux"
import { compose } from "redux";
import { followThunk, unfollowThunk } from "../../store/reducers/usersReducer";
import { getFollowedFriends } from "../../store/reducers/friendsReducer";
import { getFriends } from "../../store/selectors/friendsSelector";
import { getInProgressFollow } from "../../store/selectors/usersSelector"
import { TGlobalState } from "../../store/reduxStore";
import { TUser } from "../../types/types";
import Friends from "./Friends"
import withNavigateToLogin from "../../hoc/withNavigateToLogin";

const mapStateToProps = (state: TGlobalState) => ({
    friends: getFriends(state),
    inProgressFollow: getInProgressFollow(state)
})

// export default connect<TStateToProps, TDispatchToProps>(mapStateToProps, { followThunk, unfollowThunk, getFollowedFriends })(FriendsContainer)
export default compose<React.ComponentType>(
    connect<TStateToProps, TDispatchToProps>(mapStateToProps, { followThunk, unfollowThunk, getFollowedFriends }),
    withNavigateToLogin
)(Friends)


type TStateToProps = {
    friends: TUser[]
    inProgressFollow: number[]
}
type TDispatchToProps = {
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    getFollowedFriends: () => void
}
