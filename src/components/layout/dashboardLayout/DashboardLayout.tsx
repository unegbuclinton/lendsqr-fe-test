import React from 'react';
import Navbar from '../../molecules/navbar/Navbar';
import SideBar from '../../molecules/sidebar/SideBar';
import classes from './DashboardLayout.module.scss';

interface Prop {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Prop> = ({ children }) => {
  return (
    <div className={classes.dashboard_wrapper}>
      <Navbar />
      <div className={classes.body_content}>
        <SideBar />
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
