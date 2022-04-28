import React, { ComponentType, FC } from "react";
import { compose } from "redux";
import {InputField} from "./InputField/InputField";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import withNavigateToLogin from "../../hoc/withNavigateToLogin";
import s from './Dialogs.module.css';

const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                <DialogItem />
            </div>
            <div className={s.messages}>
                <DialogMessage />
                <InputField />
            </div>
        </div>
    )

}

export default compose<ComponentType>(
    withNavigateToLogin
)(Dialogs)