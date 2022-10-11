import React from 'react';
import UserEduInfo from '../usereducationinfo/UserEduInfo';
import UserGuarantor from '../userguarantor/UserGuarantor';
import UserPeronalInfo from '../userpersonalinfo/UserPeronalInfo';
import UserSocials from '../usersocials/UserSocials';
import classes from './UserInfo.module.scss';

const UserInfo = () => {
  return (
    <div className={classes.user_info__wrapper}>
      <h1>Personal Information</h1>
      <UserPeronalInfo />

      <h1>Education and Employment</h1>
      <UserEduInfo />

      <h1>Socials</h1>
      <UserSocials />

      <h1>Guarantor</h1>
      <UserGuarantor />
    </div>
  );
};

export default UserInfo;
