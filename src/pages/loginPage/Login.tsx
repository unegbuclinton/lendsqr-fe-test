import React from 'react';
import InputField from '../../components/atoms/input/Input';
import { DPIconLoginImg, DPIconLoginLogo } from '../../icons';
import classes from './Login.module.scss';

interface Prop {}
const Login: React.FC<Prop> = () => {
  return (
    <div className={classes.login_wrapper}>
      <header>
        <DPIconLoginLogo />
      </header>

      <div className={classes.login_body}>
        <DPIconLoginImg />
        <form action="">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <InputField placeholder="Name" type="" />
          <InputField placeholder="Password" type="password" />
          <span>FORGOT PASSWORD?</span>
          <button className={classes.button_style}>LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
