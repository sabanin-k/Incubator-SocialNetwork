import React, { ChangeEvent, FC, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/images/user.png";
import StatusInputContainer from "../StatusInput/StatusInputContainer";
import SocialLinks from "../../common/SocialsLinks/SocialLinks";
import UserPhoto from "../../common/UserPhoto/UserPhoto.tsx";
import EditProfile from "../../common/EditProfile/EditProfile";
import { TContacts, TPhotos, TSetProfileData } from "../../../types/types";
import styles from "./UserProfile.module.css";

type TProps = {
    userId: number
    authId: number
    aboutMe: string
    contacts: TContacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: TPhotos
    setPhoto: (file: any) => void
    setProfileDataThunk: (values: TSetProfileData) => void
}

const UserProfile: FC<TProps> = ({ aboutMe, contacts, lookingForAJob, lookingForAJobDescription, fullName, userId, photos, setPhoto, authId, setProfileDataThunk }) => {
    const isOwner = userId === authId;

    const [modalActive, setModalActive] = useState(false)
    const [editActive, setEditActive] = useState(false)

    const handleEditProfileSubmit = (values: TSetProfileData) => {
        setProfileDataThunk(values)
        setEditActive(false)
    }

    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files.length) setPhoto(event.target.files[0])
    }

    if (!userId) { return <Preloader /> }
    return (
        <div className={styles.wrapper}>
            <div className={styles.photoWrapper}>
                {photos.large
                    ? <img src={photos.large} alt={fullName} className={styles.avaPhoto} onClick={() => setModalActive(true)} />
                    : <img src={userImage} alt={fullName} className={styles.avaImage} />}
                {isOwner
                    && <>
                        <label htmlFor="fileInput" className={styles.labelInput}>Загрузить фото</label>
                        <input type="file" id="fileInput" className={styles.fileInput} onChange={onPhotoSelected} />
                    </>}

            </div>
            <div className={styles.about}>
                <h2>{fullName}</h2>
                <div className={styles.status}>
                    <StatusInputContainer />
                </div>
                <div className={styles.idDiv}>
                    <span className={styles.idSpan}>ID:</span>
                    <span>{userId}</span>
                </div>
                <div className={styles.div}>
                    {!lookingForAJob
                        ? <span className={styles.idSpan}>Работу не ищет</span>
                        : <div className={styles.jobDiv}>
                            <span className={styles.idSpan}>Работа:</span>
                            <span>
                                {lookingForAJobDescription}
                            </span>
                        </div>}
                </div>
                <div className={styles.div}>
                    {!aboutMe
                        ? <span className={styles.idSpan}>О себе ничего не рассказывает</span>
                        : <div className={styles.aboutDiv}>
                            <span className={styles.idSpan}>О себе:</span>
                            <span>
                                {aboutMe}
                            </span>
                        </div>}

                </div>
                <div className={styles.socialDiv}>
                    <div>
                        <SocialLinks fb={contacts.facebook}
                            web={contacts.website}
                            vk={contacts.vk}
                            tw={contacts.twitter}
                            inst={contacts.instagram}
                            yt={contacts.youtube}
                            git={contacts.github} />
                    </div>
                    {isOwner
                        &&<div>
                            {editActive
                                ? <button className={styles.closeEditButton} onClick={() => setEditActive(false)}></button>
                                : <button className={styles.openEditButton} onClick={() => setEditActive(true)}></button>}
                        </div>}
                </div>

                {isOwner
                    && <div className={editActive ? styles.formWrapper : styles.hideEditProfile }>
                        <EditProfile handleEditProfileSubmit={handleEditProfileSubmit} />
                    </div>}
            </div>

            <UserPhoto photo={photos.large} modalActive={modalActive} setModalActive={setModalActive} />
        </div>
    )
}

export default UserProfile;