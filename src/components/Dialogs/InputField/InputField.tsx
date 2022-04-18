import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import s from "./InputField.module.css";

type TProps = {
    writeMessage: (value: string) => void
}

const InputField: FC<TProps> = (props) => {
    return (
        <Formik 
            initialValues={{
                textarea: ''
            }}
            onSubmit={(values, { resetForm }) =>
                {props.writeMessage(values.textarea)
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

export default InputField