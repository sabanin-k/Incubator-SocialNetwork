import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import userImage from '../../assets/images/user.png';
import styles from './Users.module.css';

const User = ({ user, inProgressFollow, followThunk, unfollowThunk, getFollowedFriends }) => {
    useEffect(() => {
        getFollowedFriends()
    }, [inProgressFollow, getFollowedFriends])

    const followButtons = (user) => {
        return user.followed
            ? <button disabled={inProgressFollow.includes(user.id)} className={styles.button} onClick={(event) => {
                event.preventDefault();
                unfollowThunk(user.id)
            }}> Unfollow </button>
            : <button disabled={inProgressFollow.includes(user.id)} className={styles.button} onClick={(event) => {
                event.preventDefault();
                followThunk(user.id)
            }}> Follow </button>
    }
    return (
        <div className={styles.user} key={user.id}>
            <Link to={'/users/' + user.id} className={styles.link}>
                <div className={styles.userWarp}>
                    <div className={styles.avaSide}>
                        <img src={user.photos.small != null ? user.photos.small : userImage} alt={`Фото пользователя ${user.name}`} width='50px' />
                        {followButtons(user)}
                    </div>
                    <div className={styles.descriptionSide}>
                        <span className={styles.name}>Имя:
                            <span className={styles.nameText}> {user.name}</span>
                        </span>
                        <span className={styles.adress}>ID:
                            <span className={styles.adressText}> {user.id}</span>
                        </span>
                        <span className={styles.message}>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default User;