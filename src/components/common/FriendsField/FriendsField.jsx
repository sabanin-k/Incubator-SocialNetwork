import React from "react";
import { Link } from "react-router-dom";
import userImage from '../../../assets/images/user.png';
import styles from './FriendsField.module.css';

const FriendsField = ({ friends, totalFriends }) => {
    const sixFriends = friends.slice(0, 6)
    const friendRender = sixFriends.map((item) => {
        return (
            <Link to={'/users/' + item.id} key={item.id} className={styles.link}>
                <img className={styles.img} alt='ava' src={item.photos.small || userImage} width='50px' />
                <p className={styles.p}>{item.name}</p>
            </Link>
        )
    })

    return (
        <section className={styles.friends}>
            <Link to='/friends' className={styles.friendsHeaderWrap}>
                    <p className={styles.friendsHeader}>
                        <span>то шо друзья</span>
                        <span>{totalFriends}</span>
                    </p>
            </Link>
            <div className={styles.friendsWrapper}>
                {friendRender}
            </div>
        </section>
    )

}

export default FriendsField;