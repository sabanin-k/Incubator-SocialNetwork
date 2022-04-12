import React from 'react'
import UpButton from '../common/UpButton/UpButton';
import User from '../Users/User';
import styles from './Friends.module.css';

const Friends = ({ friends, inProgressFollow, followThunk, unfollowThunk, getFollowedFriends }) => {
    return (
        <div className={styles.friendsWrapper}>
            {friends.map(friend => {
                return <User user={friend}
                    inProgressFollow={inProgressFollow}
                    followThunk={followThunk}
                    unfollowThunk={unfollowThunk}
                    getFollowedFriends={getFollowedFriends}
                    key={friend.id} />
            })}
            <UpButton />
        </div>
    )
}

export default Friends;