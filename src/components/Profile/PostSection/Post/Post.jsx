import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        props.posts.map(item => {
            let likesClasses = s.likesCount;
            if (item.onLike) {
                likesClasses = s.onLike
            }
            return (
                <div key={item.id} className={s.post}>
                    <p className={s.text}>{item.text}</p>
                    <p className={s.likes}>
                        Likes: <span className={likesClasses}
                                    onClick={() => props.pressLike(item.id)}>
                            &#x2661; {item.likes}
                        </span>
                    </p>
                </div>
            )
        })
    )
}

export default Post;