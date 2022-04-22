import React, { FC } from "react";
import PostContainer from "./Post/PostContainer";

const PostSection: FC = () => {
    return (
        <section className="postSection">
            <PostContainer />
        </section>
    )
}


export default PostSection;