import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/user.png";
import StatusInputContainer from "../StatusInput/StatusInputContainer";
import SocialLinks from "../../common/SocialsLinks/SocialLinks";
import s from "./UserProfile.module.css";

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
        <div className={s.wrapper}>
            <div className={s.photoWrapper}>
                <img src={userProfile.photos.large || userImage} alt={userProfile.fullName} width='200px' />
            </div>
            <div className={s.about}>
                <h2>{userProfile.fullName}</h2>
                <div className={s.status}>
                    <StatusInputContainer />
                </div>
                <div className={s.idDiv}>
                    <span className={s.idSpan}>ID:</span>
                    <span>{userProfile.userId}</span>
                </div>
                <div className={s.div}>
                    {!userProfile.lookingForAJob
                        ? <span className={s.idSpan}>Работу не ищет</span>
                        : <div className={s.jobDiv}>
                            <span className={s.idSpan}>Работа:</span>
                            <span>
                                {userProfile.lookingForAJobDescription}
                            </span>
                        </div>}
                </div>
                <div className={s.div}>
                    {!userProfile.aboutMe
                        ? <span className={s.idSpan}>О себе ничего не рассказывает</span>
                        : <div className={s.aboutDiv}>
                            <span className={s.idSpan}>О себе:</span>
                            <span>
                                {userProfile.aboutMe}
                            </span>
                        </div>}

                </div>
                <div className={s.socialDiv}>
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