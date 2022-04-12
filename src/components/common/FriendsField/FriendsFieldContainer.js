import { connect } from "react-redux";
import { compose } from "redux";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { useEffect } from "react";
import FriendsField from "./FriendsField";
import { getFollowedFriends } from "../../../store/reducers/friendsReducer";

const FriendsFieldContainer = ({friends, getFollowedFriends, totalFriends}) => {
    useEffect(() => {
        getFollowedFriends()
    }, [getFollowedFriends])
    return <FriendsField friends={friends}
        totalFriends={totalFriends}/>
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsSection.friends,
        totalFriends: state.friendsSection.totalFriends
    }
}

export default compose(
    connect(mapStateToProps, { getFollowedFriends }),
    withNavigateToLogin
)(FriendsFieldContainer)