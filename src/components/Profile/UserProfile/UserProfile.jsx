import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/user.png";
import StatusInputContainer from "../StatusInput/StatusInputContainer";
import s from "./UserProfile.module.css";

const UserProfile = (props) => {
    if (!props.userProfile) { return <Preloader /> }
    return (
        <div className={s.wrapper}>
            <div className={s.photoWrapper}>
                <img src={props.userProfile.photos.large || userImage} alt={props.fullName} width='200px' />
            </div>
            <div className={s.about}>
                <h2>{props.userProfile.fullName}</h2>
                <div className={s.status}>
                    <StatusInputContainer />
                </div>
                <div className={s.idDiv}>
                    <span className={s.idSpan}>ID</span>
                    <span>{props.userProfile.userId}</span>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;