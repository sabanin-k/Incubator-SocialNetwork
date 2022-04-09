import React from "react";
import { Link } from "react-router-dom";
import userImage from '../../assets/images/user.png';
import Paginator from "../common/Paginator/Paginator";
import styles from './Users.module.css';

const Users = (props) => {
    const followButtons = (u) => {
        return u.followed
            ? <button disabled={props.inProgressFollow.includes(u.id)} className={styles.button} onClick={(event) => {
                event.preventDefault();
                props.unfollowThunk(u.id)
            }}> Unfollow </button>
            : <button disabled={props.inProgressFollow.includes(u.id)} className={styles.button} onClick={(event) => {
                event.preventDefault();
                props.followThunk(u.id)
            }}> Follow </button>
    }

    return (
        <section className={styles.usersSection}>
            <div className={styles.paginatorDiv}>
                <Paginator totalCount={props.totalCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    setCurrentPage={props.hadlerSetCurrentPage} />
            </div>

            {props.users.map(u => {
                return (
                    <Link to={'/users/' + u.id} className={styles.link} key={u.id}>
                        <div className={styles.userWarp}>
                            <div className={styles.avaSide}>
                                <img src={u.photos.small != null ? u.photos.small : userImage} alt={`Фото пользователя ${u.name}`} width='50px' />
                                {followButtons(u)}
                            </div>
                            <div className={styles.descriptionSide}>
                                <span className={styles.name}>Имя:
                                    <span className={styles.nameText}> {u.name}</span>
                                </span>
                                <span className={styles.adress}>ID:
                                    <span className={styles.adressText}> {u.id}</span>
                                </span>
                                <span className={styles.message}>
                                </span>
                            </div>
                        </div>
                    </Link>
                )
            })}
            {/* {props.isFetching || <button className={styles.add}>Загрузить ещё...</button>} */}
        </section>
    )
}

export default Users;