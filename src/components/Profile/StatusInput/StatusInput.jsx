import React, { useEffect, useState } from "react";
import styles from "./StatusInput.module.css";

const StatusInput = ({ status, updateStatusThunk, userId, authUserId }) => {
    useEffect(() => setStatusValue(status), [status])

    const [editMode, setEditMode] = useState(false)
    const [statusValue, setStatusValue] = useState(status)


    const handleDoubleClick = () => {
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
                : <p className={styles.p} onDoubleClick={handleDoubleClick}>{status || 'статус зажопил'}</p>}
        </div>
    )
}

export default StatusInput;