import React, { FC } from "react";
import { TUsers } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import UpButton from "../common/UpButton/UpButton";
import SearchUserInput from "./SearchUser/SearchUserInput";
import User from "./User.tsx";
import styles from './Users.module.css';

const Users: FC<TProps> = (props) => {
    return <>
        <section className={styles.usersSection}>
            <div className={styles.search}>
                <SearchUserInput searchUser={props.searchUser} />
            </div>
            {props.users.map(user => {
                return <User key={user.id}
                    user={user}
                    inProgressFollow={props.inProgressFollow}
                    followThunk={props.followThunk}
                    unfollowThunk={props.unfollowThunk}
                    getFollowedFriends={props.getFollowedFriends} />
            })}
        </section>
        <UpButton />
        <div className={styles.paginatorDiv}>
            <Paginator totalCount={props.totalCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.hadlerSetCurrentPage} />
        </div>
    </>
}

export default Users;


type TProps = {
    users: TUsers
    totalCount: number
    pageSize: number
    currentPage: number
    inProgressFollow: number[]
    hadlerSetCurrentPage: (number: number) => void
    followThunk: () => void
    unfollowThunk: () => void
    getFollowedFriends: () => void
    searchUser: (value: string) => void
}