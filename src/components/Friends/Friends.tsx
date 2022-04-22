import React, { FC } from 'react'
import { TUser } from '../../types/types';
import UpButton from '../common/UpButton/UpButton';
import User from '../Users/User.tsx';
import styles from './Friends.module.css';

const Friends: FC<TProps> = ({ friends, inProgressFollow, followThunk, unfollowThunk, getFollowedFriends }) => {
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


type TProps = {
    friends: TUser[]
    inProgressFollow: number[]
    followThunk: (userId: number) => void
    unfollowThunk: (userId: number) => void
    getFollowedFriends: () => void
}
