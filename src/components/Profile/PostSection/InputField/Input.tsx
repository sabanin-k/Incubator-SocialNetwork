import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import styles from './Input.module.css';

type TProps = {
    addPost: (value: string) => void
}

const Input: FC<TProps> = ({ addPost }) => {
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
                addPost(values.input)
                resetForm({})
            }}>
            {({ errors, touched, dirty, handleBlur, isValid }) => (
                <Form className={styles.inputForm}>
                    <Field
                        name="input"
                        type="input"
                        placeholder="Что нового?"
                        onBlur={handleBlur}
                        className={styles.input} />
                    {touched.input && errors.input && <div>{errors.input}</div>}
                    <button type="submit" disabled={!dirty && !isValid}>Написать</button>
                </Form>
            )}
        </Formik>
    )
}

export default Input;