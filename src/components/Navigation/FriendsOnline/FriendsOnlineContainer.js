import { connect } from "react-redux";
import FriendsOnline from "./FriendsOnline";

const mapStateToProps = (state) => {
    return {
        friends: state.friendsSection.friends
    }
}

const FriendsOnlineContainer = connect(mapStateToProps, null)(FriendsOnline)

export default FriendsOnlineContainer;