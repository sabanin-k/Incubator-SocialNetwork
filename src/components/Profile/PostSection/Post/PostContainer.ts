import { connect } from "react-redux";
import { pressLike } from "../../../../store/reducers/profileReducer";
import { TGlobalState } from "../../../../store/reduxStore";
import Post from "./Post";

const mapStateToProps = (state: TGlobalState) => {
    return {
        posts: state.profilePage.posts
    }
}

export default connect(mapStateToProps, { pressLike })(Post)