import React from 'react'
import styles from './UserPhoto.module.css';

const UserPhoto = ({ photo, modalActive, setModalActive }) => {
    return (
        <div className={modalActive ? styles.photoWrapper : styles.hide} onClick={() => setModalActive(false)}>
            <img className={styles.photo} src={photo} alt="Фото пользователя" onClick={(e) => e.stopPropagation()} />
        </div>
    )
}

export default UserPhoto
