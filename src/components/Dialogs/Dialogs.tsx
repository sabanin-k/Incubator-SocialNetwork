import React, { ComponentType, FC } from "react";
import InputFieldContainer from "./InputField/InputFieldContainer";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import DialogMessageContainer from "./DialogMessage/DialogMessageContainer";
import s from './Dialogs.module.css';
import { compose } from "redux";
import withNavigateToLogin from "../../hoc/withNavigateToLogin";

const Dialogs: FC = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogList}>
                <DialogItemContainer />
            </div>
            <div className={s.messages}>
                <DialogMessageContainer />
                <InputFieldContainer />
            </div>
        </div>
    )

}

export default compose<ComponentType>(
    withNavigateToLogin
)(Dialogs)