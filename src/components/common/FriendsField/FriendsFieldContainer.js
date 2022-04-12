import { connect } from "react-redux";
import FriendsField from "./FriendsField";
import { getFollowedFriends } from "../../../store/reducers/friendsReducer";
import { useEffect } from "react";

const FriendsFieldContainer = ({friends, getFollowedFriends, totalFriends}) => {
    console.log( totalFriends )
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

export default connect(mapStateToProps, { getFollowedFriends })(FriendsFieldContainer)