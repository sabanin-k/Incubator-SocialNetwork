import React, { FC } from "react";
import { TPost } from "../../../../store/reducers/profileReducer";
import styles from './Post.module.css'

const Post: FC<TProps> = ({ posts, pressLike }) => {
    return <>
        {posts.map(item => {
            let likesClasses = styles.likesCount;
            if (item.onLike) {
                likesClasses = styles.onLike
            }
            return (
                <div key={item.id} className={styles.post}>
                    <p className={styles.text}>{item.text}</p>
                    <p className={styles.likes}>
                        Likes: <span className={likesClasses}
                            onClick={() => pressLike(item.id)}>
                            &#x2661; {item.likes}
                        </span>
                    </p>
                </div>
            )
        })}
    </>
}

export default Post;


type TProps = {
    posts: TPost[]
    pressLike: (id: number) => void
}
