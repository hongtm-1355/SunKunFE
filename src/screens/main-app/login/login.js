import React from "react"
import { connect } from 'react-redux'
import { compose } from "recompose"
import { withFormik } from "formik"
import { withTranslation } from "react-i18next"
import { Form, Input, Button } from 'antd'

import { loginAction } from '../../../actions/auth-action'
import { statusError, tError} from "../../../ultiz/form-ultiz"

import styles from './style.module.scss'

import miniLogo from "../../../assests/images/sungo.png"
import { authValidation } from "../../../models/auth";

const Login = props => {
  const { values, errors, t, handleChange, handleSubmit, handleBlur, touched } = props
  return (
    <div className={styles.mainLogin}>
      <div className={styles.formLogin}>
        <div className={styles.mainForm}>
          <div className={styles.miniLogo}>
            <img alt="logo"  src={miniLogo} width="70%"/>
            <h2 className={styles.h1}>Login</h2>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Item validateStatus={statusError(errors.email, 'email', touched)} help={touched['email'] && tError(errors.email, t)} value={values.email}>
              <Input
                name="email"
                placeholder="User ID / Email"
                className={styles.inputField}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item validateStatus={statusError(errors.password, 'password', touched)} help={touched['password'] && tError(errors.password, t)}>
              <Input.Password
                name="password"
                placeholder="Password"
                className={styles.inputField}
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
                />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className={styles.button} type="primary" size="large">{props.t("btn submit")}</Button>
            </Form.Item>
          </Form>
        </div>
        <p className={styles.footer}>Cosplay by Sun Thị Inc, All rights reserved</p>
      </div>
    </div>
  )
}

export default compose(
  withTranslation("login"),
  connect(null, { loginAction }),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: authValidation,
    handleSubmit: (values, { props, setSubmitting, setErrors }) => {
      props.loginAction({ values, meta: { t: props.t, setSubmitting, setErrors }})
    }
  })
)(Login)
