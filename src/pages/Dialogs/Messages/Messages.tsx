import React, { FC } from "react";
import { TOpponent, TOpponentMessages } from "../../../api/dialogsAPI";
import { TUserProfile } from "../../../types/types";
import { lineBreaker } from "../../../helpers/lineBreaker";
import userImage from '../../../assets/images/user.png';
import styles from './Messages.module.css';

export const Messages: FC<TProps> = ({ messages, currentOpponent, authProfile }) => {   

    return <div className={styles.wrapper}>
        {currentOpponent.id
            ? messages.map(m => {
                return <div key={m.id} className={styles.messageWrapper}>
                    <div className={styles.photoWrapper}>
                        <img
                            src={currentOpponent.id === m.senderId
                                ? currentOpponent.photos.small || userImage
                                : authProfile.photos.small || userImage}
                            alt='фото пользователя'
                            width='30px'
                            className={styles.photo}
                        />
                    </div>
                    <div>
                        <p className={styles.senderName}>{m.senderName}</p>
                        <p className={styles.message}>{lineBreaker(m.body, 30)}</p>
                    </div>
                </div>
            })
        : <div className={styles.chooseOpponent}>Выберите собеседника</div> }
    </div>
}


type TProps = {
    messages: TOpponentMessages[]
    currentOpponent: TOpponent
    authProfile: TUserProfile
}