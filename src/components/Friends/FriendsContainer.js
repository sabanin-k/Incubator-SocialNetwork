import React from "react"
import { connect } from "react-redux"
import { followThunk, unfollowThunk } from "../../store/reducers/usersReducer";
import { getFollowedFriends } from "../../store/reducers/friendsReducer";
import { getFriends } from "../../store/selectors/friendsSelector";
import { getInProgressFollow } from "../../store/selectors/usersSelector"
import Friends from "./Friends"

const FriendsContainer = ({ friends, inProgressFollow, followThunk, unfollowThunk, getFollowedFriends }) => {
    return <Friends friends={friends}
        inProgressFollow={inProgressFollow}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
        getFollowedFriends={getFollowedFriends}/>
}

const mapStateToProps = (state) => ({
    friends: getFriends(state),
    inProgressFollow: getInProgressFollow(state)
})

export default connect(mapStateToProps, { followThunk, unfollowThunk, getFollowedFriends })(FriendsContainer)