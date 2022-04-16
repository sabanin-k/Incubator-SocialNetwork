import { connect } from "react-redux";
import { pressLike } from "../../../../store/reducers/profileReducer.ts";
import Post from "./Post";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

const PostContainer = connect(mapStateToProps, { pressLike })(Post)

export default PostContainer;