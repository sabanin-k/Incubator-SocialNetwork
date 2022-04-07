import React from "react";
import { Link } from "react-router-dom";
import userImage from '../../assets/images/user.png';
import s from './Users.module.css';

const Users = (props) => {
    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.totalCount / (props.pageSize * 100)); i++) {
        pageNumbers.push(i);
    }

    const followButtons = (u) => {
        if (u.followed) {
            return (
                <button disabled={props.inProgressFollow.includes(u.id)} className={s.button} onClick={(event) => {
                    event.preventDefault();
                    props.unfollowThunk(u.id)
                }}
                > Unfollow
                </button>
            )
        } else {
            return (
                <button disabled={props.inProgressFollow.includes(u.id)} className={s.button} onClick={(event) => {
                    event.preventDefault();
                    props.followThunk(u.id)
                }}
                > Follow
                </button>
            )
        }
    }
    
    return (
        <section className={s.usersSection}>
            <div>
                {pageNumbers.map((item, i) => {
                        return <span key={i} onClick={() => props.hadlerSetCurrentPage(item)}
                            className={props.currentPage === item ? s.activePage : s.pageNumber}
                        >{props.isFetching || item}</span>
                })}
            </div>

            {props.users.map(u => {
                return (
                    <Link to={'/users/' + u.id} className={s.link} key={u.id}>
                        <div className={s.userWarp}>
                            <div className={s.avaSide}>
                                <img src={u.photos.small != null ? u.photos.small : userImage} alt={`Фото пользователя ${u.name}`} width='50px' />
                                {followButtons(u)}
                            </div>
                            <div className={s.descriptionSide}>
                                <span className={s.name}>Имя:
                                    <span className={s.nameText}> {u.name}</span>
                                </span>
                                <span className={s.adress}>ID:
                                    <span className={s.adressText}> {u.id}</span>
                                </span>
                                <span className={s.message}>
                                </span>
                            </div>
                        </div>
                    </Link>
                )
            })}
            {props.isFetching || <button className={s.add}>Загрузить ещё...</button>}
        </section>
    )
}

export default Users;