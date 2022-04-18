import React, { FC } from "react"
import { connect } from "react-redux"
import { followThunk, unfollowThunk } from "../../store/reducers/usersReducer";
import { getFollowedFriends } from "../../store/reducers/friendsReducer";
import { getFriends } from "../../store/selectors/friendsSelector";
import { getInProgressFollow } from "../../store/selectors/usersSelector"
import Friends from "./Friends"
import { TGlobalState } from "../../store/reduxStore";
import { TUser } from "../../types/types";

type TProps = {
    friends: TUser[]
    inProgressFollow: number[]
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    getFollowedFriends: () => void
}

const FriendsContainer: FC<TProps> = ({ friends, inProgressFollow, followThunk, unfollowThunk, getFollowedFriends }) => {
    return <Friends friends={friends}
        inProgressFollow={inProgressFollow}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
        getFollowedFriends={getFollowedFriends}/>
}

const mapStateToProps = (state: TGlobalState) => ({
    friends: getFriends(state),
    inProgressFollow: getInProgressFollow(state)
})

export default connect(mapStateToProps, { followThunk, unfollowThunk, getFollowedFriends })(FriendsContainer)