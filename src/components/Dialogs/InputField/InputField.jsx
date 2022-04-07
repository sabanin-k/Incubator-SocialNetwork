import React from "react";
import { Formik, Form, Field } from "formik";
import s from "./InputField.module.css";

const InputField = (props) => {
    return (
        <Formik 
            initialValues={{
                textarea: ''
            }}
            onSubmit={(values, { resetForm }) =>
                {props.writeMessage(values.textarea)
                resetForm({values: ''})}}>
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