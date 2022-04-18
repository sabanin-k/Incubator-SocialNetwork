import React, { FC, useEffect, useState } from "react";
import styles from "./StatusInput.module.css";

type TProps = {
    status: string
    updateStatusThunk: (statusValue: string) => void
    userId: number
    authUserId: number
}

const StatusInput: FC<TProps> = ({ status, updateStatusThunk, userId, authUserId }) => {
    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(status)
    
    useEffect(() => setStatusValue(status), [status])

    const handleClick = () => {
        if (userId === authUserId) {
            setEditMode(true)
        }
    }

    const handleOnBlur = () => {
        updateStatusThunk(statusValue)
        setEditMode(false)
    }

    const handleOnChange = (event) => {
        setStatusValue(event.target.value)
    }

    return (
        <div className={styles.div}>
            {!!editMode
                ? <input className={styles.input}
                    type="text" placeholder="Чего расскажешь?"
                    defaultValue={statusValue}
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    autoFocus={true} />
                : userId === authUserId
                    ? <p className={styles.pForAuthUser} onClick={handleClick}>{ status || 'жмяк ми'}</p>
                    : <p className={styles.p}>{ status || ''}</p> }
        </div>
    )
}

export default StatusInput;