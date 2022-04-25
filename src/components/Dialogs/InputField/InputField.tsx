import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { writeMessage } from "../../../store/reducers/dialogsReducer";
import s from "./InputField.module.css";

export const InputField: FC = () => {
    const dispatch = useDispatch()
    return (
        <Formik 
            initialValues={{
                textarea: ''
            }}
            onSubmit={(values, { resetForm }) =>
                {dispatch(writeMessage(values.textarea))
                resetForm({})}}>
            <Form className={s.form}>
                <Field
                    type='textarea'
                    name='textarea'
                    placeholder="Введите сообщение" />
                <button type='submit'>Отправить</button>
            </Form>
        </Formik>
    )
}
