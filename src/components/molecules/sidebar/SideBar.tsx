import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DPIconBriefCase,
  DPIcondropdownIcon,
  DPIconHome,
} from '../../../icons';
import { SidebarContent } from '../../../utilities/SideBarContent';
import classes from './Sidebar.module.scss';

const SideBar = () => {
  return (
    <div className={classes.sidebar_container}>
      <header>
        <span>
          <DPIconBriefCase />
        </span>
        <p>Switch Organization</p>
        <span>
          <DPIcondropdownIcon />
        </span>
      </header>
      <div className={classes.heading}>
        <span>
          <DPIconHome />
        </span>
        <p> Dashboard</p>
      </div>

      <p className={classes.categories}> CUSTOMERS</p>
      {SidebarContent.map(({ route, icon, text }) => {
        return (
          <NavLink
            key={Math.random()}
            to={route}
            className={({ isActive }) =>
              isActive ? classes.nav_link__selected : classes.nav_link
            }
          >
            <span>{icon}</span> <p>{text}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
