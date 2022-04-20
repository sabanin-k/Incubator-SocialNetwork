import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import FriendsField from "./FriendsField";
import { getFollowedFriends } from "../../../store/reducers/friendsReducer";
import { getIsLogged } from "../../../store/selectors/authSelector";
import { TGlobalState } from "../../../store/reduxStore"
import { TUser } from "../../../types/types"

type TStateProps = {
    friends: TUser[]
    isLogged: boolean
    totalFriends: number
}

type TDispatchProps = {
    getFollowedFriends: () => void
}

type TProps = TStateProps & TDispatchProps

const FriendsFieldContainer: FC<TProps> = ({ friends, getFollowedFriends, totalFriends, isLogged }) => {
    useEffect(() => {
        getFollowedFriends()
    }, [getFollowedFriends])

    return (
        isLogged && <FriendsField friends={friends}
            totalFriends={totalFriends} />
    )
}

const mapStateToProps = (state: TGlobalState) => {
    return {
        isLogged: getIsLogged(state),
        friends: state.friendsSection.friends,
        totalFriends: state.friendsSection.totalFriends
    }
}

export default connect<TStateProps, TDispatchProps>(mapStateToProps, { getFollowedFriends })(FriendsFieldContainer)