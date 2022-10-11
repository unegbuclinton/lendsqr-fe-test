import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/atoms/input/Input';
import ErrorMsg from '../../components/molecules/errormessage/ErrorMsg';
import { loginSchema } from '../../components/validation/LoginValidation';
import { DPIconLoginImg, DPIconLoginLogo } from '../../icons';
import classes from './Login.module.scss';

interface Prop {}
const Login: React.FC<Prop> = () => {
  const navigate = useNavigate();
  interface values {
    email: string;
    password: string;
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values: values) => {
      console.log(values.email, values.password);
      navigate('/dashboard');
    },
  });

  return (
    <div className={classes.login_wrapper}>
      <header>
        <DPIconLoginLogo />
      </header>

      <div className={classes.login_body}>
        <DPIconLoginImg />
        <form onSubmit={formik.handleSubmit}>
          <h1>Welcome!</h1>
          <p className={classes.login_sub__head}>Enter details to login.</p>

          <div>
            <InputField
              type=""
              placeholder="Name"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMsg text={formik.errors.email} />
            ) : null}
          </div>
          <div>
            <InputField
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <ErrorMsg text={formik.errors.password} />
            ) : null}
          </div>

          <div className={classes.forgot_link}>FORGOT PASSWORD?</div>
          <button type="submit" className={classes.button_style}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
