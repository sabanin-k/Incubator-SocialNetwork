import React from "react";
import { Formik, Form, Field } from 'formik';
import { Navigate } from "react-router-dom";
import * as yup from "yup";
import styles from "./Login.module.css";

const Login = (props) => {
    if (props.isLogged) return <Navigate to='/profile' />

    const schema = yup.object().shape({
        email: yup.string().required('Обязательно').email('Неправильно, ебанные волки!'),
        password: yup.string().required('Обязательно')
    });

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
                }}
                validateOnChange
                validationSchema={schema}
                onSubmit={async (values) => {
                    props.login(values)
                    setTimeout(() => {
                        props.getAuth()
                        if (props.isLogged) window.location.reload()
                    }, 500);
                }}
            >
                {({ errors, touched, dirty, isValid, handleBlur }) => (
                    <Form className={styles.form}>
                        <Field type='email' name='email' placeholder='e-mail' className={styles.input} onBlur={handleBlur} />
                        {touched.email && errors.email && <span>{errors.email}</span>}

                        <Field type='password' name='password' placeholder='пароль' className={styles.input} />
                        {touched.password && errors.password && <span>{errors.password}</span>}

                        {!!props.errorMessage && <div>{props.errorMessage}</div>}
                        {!!props.captchaURL
                            && <div className={styles.captchaWrapper}>
                                <Field type='input' name='captcha' onBlur={handleBlur}/>
                                <img src={props.captchaURL} alt=''/>
                            </div> }

                        <div className={styles.checkboxWrapper}>
                            <Field type='checkbox' name='rememberMe' id='rememberMe' className={styles.checkbox} />
                            <label htmlFor="rememberMe" className={styles.label}>Запомнить меня</label>
                        </div>
                        <button type='submit' disabled={!isValid || !dirty} >Поїхали!</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default Login;
