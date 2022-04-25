import React, { FC, useEffect, useState } from 'react'
import styles from './UpButton.module.css';

export const UpButton: FC = () => {
    const [buttonState, setButtonState] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setButtonState(true)
        } else {
            setButtonState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])  

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <div className={styles.wrapper}>
            {buttonState && <span className={`${styles.button} ${styles.show}`} onClick={handleClick}>Наверх</span>}
        </div>
    )
}
