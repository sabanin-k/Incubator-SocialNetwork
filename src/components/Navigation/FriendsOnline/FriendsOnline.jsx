import React from "react";
import s from './FriendsOnline.module.css';

const FriendsOnline = (props) => {
    const friendRender = props.friends.map((item) => {
        return (
            <li key={item.id} className={s.li}>
                <img className={s.img} alt='ava' src={item.avaLink} width='50px' />
                <p className={s.p}>{item.name}</p>
            </li>
        )
    })

    return (
        <section className={s.friends}>
            <div className={s.friendsOnlineWrap}>
                <p className={s.friendsOnline}>то шо онлайн</p>
            </div>
            <ul className={s.ul}>
                {friendRender}
            </ul>
        </section>
    )

}

export default FriendsOnline;