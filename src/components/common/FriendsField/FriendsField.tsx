import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import userImage from '../../../assets/images/user.png';
import { TUser } from "../../../types/types";
import styles from './FriendsField.module.css';

type TProps = {
    friends: TUser[]
    totalFriends: number
}

const FriendsField: FC<TProps> = ({ friends, totalFriends }) => {
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
            <div  className={ styles.friendsHeaderWrap}>
                    <NavLink to='/friends' className={navData => navData.isActive ? styles.active : styles.friendsHeader}>
                        <span>то шо друзья</span>
                        <span>{totalFriends}</span>
                    </NavLink>
            </div>
            <div className={styles.friendsWrapper}>
                {friendRender}
            </div>
        </section>
    )

}

export default FriendsField;