import React from 'react';
import Button from '../../components/atoms/button/Button';
import DashboardLayout from '../../components/layout/dashboardLayout/DashboardLayout';
import UserTab from '../../components/molecules/usertab/UserTab';
import { DPIconBackIcon } from '../../icons';
import classes from './UserDetail.module.scss';

interface Prop {}
const UserDetails: React.FC<Prop> = () => {
  return (
    <DashboardLayout>
      <div className={classes.back_btn}>
        <DPIconBackIcon /> <span>Back to Users</span>
      </div>
      <div className={classes.user_header}>
        <h1>Users</h1>
        <div className={classes.status_btn}>
          <Button className={classes.black_list__btn}> BLACKLIST USER</Button>
          <Button className={classes.active_btn}>ACTIVE USER</Button>
        </div>
      </div>
      <UserTab />
    </DashboardLayout>
  );
};

export default UserDetails;
