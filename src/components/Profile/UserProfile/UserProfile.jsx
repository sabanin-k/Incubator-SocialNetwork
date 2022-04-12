import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/user.png";
import StatusInputContainer from "../StatusInput/StatusInputContainer";
import SocialLinks from "../../common/SocialsLinks/SocialLinks";
import styles from "./UserProfile.module.css";

const UserProfile = ({ userProfile }) => {

    // const data = {
    //     "aboutMe": 'Учкудук - три колодца!',
    //     "lookingForAJob": true,
    //     "lookingForAJobDescription": 'ищу свищу, найду сообщу',
    //     "fullName": 'sabanin_k',
    //     "contacts": {
    //         github: 'https://github.com/sabanin-k',
    //         vk: 'https://vk.com/sabanin_k',
    //         facebook: 'https://facebook.com/sabanin.k',
    //         instagram: 'https://instagram.com/sabanin_k',
    //         twitter: 'https://twitter.com/sabanin_k',
    //     }
    // }

    if (!userProfile) { return <Preloader /> }
    return (
        <div className={styles.wrapper}>
            <div className={styles.photoWrapper}>
                <img src={userProfile.photos.large || userImage} alt={userProfile.fullName} width='200px' />
            </div>
            <div className={styles.about}>
                <h2>{userProfile.fullName}</h2>
                <div className={styles.status}>
                    <StatusInputContainer />
                </div>
                <div className={styles.idDiv}>
                    <span className={styles.idSpan}>ID:</span>
                    <span>{userProfile.userId}</span>
                </div>
                <div className={styles.div}>
                    {!userProfile.lookingForAJob
                        ? <span className={styles.idSpan}>Работу не ищет</span>
                        : <div className={styles.jobDiv}>
                            <span className={styles.idSpan}>Работа:</span>
                            <span>
                                {userProfile.lookingForAJobDescription}
                            </span>
                        </div>}
                </div>
                <div className={styles.div}>
                    {!userProfile.aboutMe
                        ? <span className={styles.idSpan}>О себе ничего не рассказывает</span>
                        : <div className={styles.aboutDiv}>
                            <span className={styles.idSpan}>О себе:</span>
                            <span>
                                {userProfile.aboutMe}
                            </span>
                        </div>}

                </div>
                <div className={styles.socialDiv}>
                    <div>
                        <SocialLinks fb={userProfile.contacts.facebook}
                            web={userProfile.contacts.website}
                            vk={userProfile.contacts.vk}
                            tw={userProfile.contacts.twitter}
                            inst={userProfile.contacts.instagram}
                            yt={userProfile.contacts.youtube}
                            git={userProfile.contacts.github} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;