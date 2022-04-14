import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import s from './Input.module.css';

const Input = (props) => {
    const schema = yup.object().shape({
        input: yup.string().required('Ну говори, ты же начинал говорить, говори')
    })

    return (
        <Formik
            initialValues={{
                input: ''
            }}
            validateOnBlur
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                props.addPost(values.input)
                resetForm({ values: '' })
            }}>
            {({ errors, touched, dirty, handleBlur, isValid }) => (
                <Form className={s.inputForm}>
                    <Field
                        name="input"
                        type="input"
                        placeholder="Что нового?"
                        onBlur={handleBlur}
                        className={s.input} />
                    {touched.input && errors.input && <div>{errors.input}</div>}
                    <button type="submit" disabled={!dirty && !isValid}>Написать</button>
                </Form>
            )}
        </Formik>
    )
}

export default Input;