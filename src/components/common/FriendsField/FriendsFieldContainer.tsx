import React, { FC, useEffect, Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import FriendsField from "./FriendsField";
import { getFollowedFriends } from "../../../store/reducers/friendsReducer";
import { getIsLogged } from "../../../store/selectors/authSelector";
import { TGlobalState } from "../../../store/reduxStore"
import { TUser } from "../../../types/types"

type TProps = {
    friends: TUser[]
    isLogged: boolean
    totalFriends: number
    getFollowedFriends: () => void
}

const FriendsFieldContainer: FC<TProps> = ({ friends, getFollowedFriends, totalFriends, isLogged }) => {
    useEffect(() => {
        getFollowedFriends()
    }, [getFollowedFriends])

    if (isLogged) {
        return <FriendsField friends={friends}
            totalFriends={totalFriends} />
    }
}

const mapStateToProps = (state: TGlobalState) => {
    return {
        isLogged: getIsLogged(state),
        friends: state.friendsSection.friends,
        totalFriends: state.friendsSection.totalFriends
    }
}

export default compose<Component>(
    connect(mapStateToProps, { getFollowedFriends }),
    withNavigateToLogin
)(FriendsFieldContainer)