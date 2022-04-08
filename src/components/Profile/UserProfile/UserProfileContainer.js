import { connect } from "react-redux";
import { Component } from "react";
import { getUserProfileThunk } from "../../../store/reducers/userProfileReducer";
import UserProfile from "./UserProfile";
import withNavigateToLogin from "../../../hoc/withNavigateToLogin";
import { compose } from "redux";
import withMatchToProps from "../../../hoc/withMatchToProps";
import { getIsLogged } from "../../../store/selectors/authSelector";
import { getUserProfile } from "../../../store/selectors/userProfileSelector";

class UserProfileContainer extends Component {
    componentDidMount() {
        this.props.getUserProfileThunk(this.props.match)
    }

    render() {
        return <UserProfile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    userProfile: getUserProfile(state),
    isLogged: getIsLogged(state)
})

export default compose(
    connect(mapStateToProps, { getUserProfileThunk }),
    withNavigateToLogin,
    withMatchToProps
    )(UserProfileContainer)

// export default connect(mapStateToProps, { getUserProfileThunk })( withNavigateToLogin(MatchToProps) )