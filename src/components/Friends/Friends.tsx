import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFollowedFriends } from '../../store/reducers/friendsReducer';
import { followThunk, unfollowThunk } from '../../store/reducers/usersReducer';
import { getFriends } from '../../store/selectors/friendsSelector';
import { getInProgressFollow } from '../../store/selectors/usersSelector';
import { UpButton } from '../common/UpButton/UpButton';
import { User } from '../Users/User';
import styles from './Friends.module.css';

export const Friends: FC = () => {
    const friends = useSelector(getFriends)
    const inProgressFollow = useSelector(getInProgressFollow)
    const dispatch = useDispatch()
    const follow = (userId: number) => dispatch(followThunk(userId))
    const unfollow = (userId: number) => dispatch(unfollowThunk(userId))

    useEffect(() => {
        dispatch(getFollowedFriends())
    }, [dispatch, inProgressFollow])

    return (
        <div className={styles.friendsWrapper}>
            {friends.map(friend => {
                return <User user={friend}
                    inProgressFollow={inProgressFollow}
                    followThunk={follow}
                    unfollowThunk={unfollow}
                    key={friend.id} />
            })}
            <UpButton />
        </div>
    )
}
