import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowedFriends } from "../../store/reducers/friendsReducer";
import { followThunk, setCurrentPageThunk, setSearchTerm, unfollowThunk } from "../../store/reducers/usersReducer";
import { getCurrentPage, getInProgressFollow, getPageSize, getSearchTerm, getTotalCount, getUsers } from "../../store/selectors/usersSelector";
import {Paginator} from "../common/Paginator/Paginator";
import {UpButton} from "../common/UpButton/UpButton";
import SearchUserInput from "./SearchUser/SearchUserInput";
import { User } from "./User";
import styles from './Users.module.css';

const Users: FC = () => {
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const totalCount = useSelector(getTotalCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const searchTerm = useSelector(getSearchTerm)
    const inProgressFollow = useSelector(getInProgressFollow)
    const handleFollowThunk = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const handleUnfollowThunk = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }
    const handleSetCurrentPageThunk = (number: number) => {
        dispatch(setCurrentPageThunk(number))
    }
    const handleSetSearchTerm = (value: string) => {
        dispatch(setSearchTerm(value))
    }

    useEffect(() => {
        dispatch(getFollowedFriends())
    }, [inProgressFollow, dispatch])
    
    return <>
        <section className={styles.usersSection}>
            <div className={styles.search}>
                <SearchUserInput setSearchTerm={handleSetSearchTerm}
                    setCurrentPage={handleSetCurrentPageThunk}
                    searchTerm={searchTerm} />
            </div>
            {users.map(user => {
                return <User key={user.id}
                    user={user}
                    inProgressFollow={inProgressFollow}
                    followThunk={handleFollowThunk}
                    unfollowThunk={handleUnfollowThunk} />
            })}
        </section>
        <UpButton />
        <div className={styles.paginatorDiv}>
            <Paginator totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={handleSetCurrentPageThunk} />
        </div>
    </>
}

export default Users;
