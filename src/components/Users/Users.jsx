import React from "react";
import Paginator from "../common/Paginator/Paginator";
import UpButton from "../common/UpButton/UpButton";
import User from "./User";
import styles from './Users.module.css';

const Users = (props) => {
    return (<>
        <section className={styles.usersSection}>
            {props.users.map(user => {
                return <User user={user}
                    inProgressFollow={props.inProgressFollow}
                    followThunk={props.followThunk}
                    unfollowThunk={props.unfollowThunk} />
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
    )
}

export default Users;