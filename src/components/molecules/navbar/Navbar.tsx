import React from 'react';
import {
  DPIconArrowDown,
  DPIcondashBoardLogo,
  DPIconNotification,
} from '../../../icons';
import img from '../../../icons/img/profilepix.png';
import SearchBar from '../search-bar/SearchBar';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav_wrapper}>
      <DPIcondashBoardLogo />
      <SearchBar />
      <div className={classes.right_nav__items}>
        <span>Docs</span>
        <DPIconNotification />
        <img src={img} alt="" />
        <DPIconArrowDown />
      </div>
    </nav>
  );
};

export default Navbar;
