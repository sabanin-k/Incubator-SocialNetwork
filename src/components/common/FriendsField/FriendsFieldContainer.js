import { connect } from "react-redux";
import { compose } from "redux";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { useEffect } from "react";
import FriendsField from "./FriendsField";
import { getFollowedFriends } from "../../../store/reducers/friendsReducer.ts";
import { getIsLogged } from "../../../store/selectors/authSelector";

const FriendsFieldContainer = ({ friends, getFollowedFriends, totalFriends, isLogged }) => {
    useEffect(() => {
        getFollowedFriends()
    }, [getFollowedFriends])

    if (isLogged) {
        return <FriendsField friends={friends}
            totalFriends={totalFriends} />
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: getIsLogged(state),
        friends: state.friendsSection.friends,
        totalFriends: state.friendsSection.totalFriends
    }
}

export default compose(
    connect(mapStateToProps, { getFollowedFriends }),
    withNavigateToLogin
)(FriendsFieldContainer)