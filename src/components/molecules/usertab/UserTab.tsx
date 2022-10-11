import React from 'react';
import {
  DPIconAvatar,
  DPIconStarIcon,
  DPIconStarOutlineIcon,
} from '../../../icons';
import { userTabs } from '../../../utilities/UserTabDetails';
import Tab from '../tab/Tab';
import classes from './UserTab.module.scss';

const UserTab = () => {
  return (
    <>
      <div className={classes.user_card__wrapper}>
        <DPIconAvatar />
        <div className={classes.user_info}>
          <h1>Grace Effiom</h1>
          <p>LSQFf587g90LSQFf587g90</p>
        </div>

        <div className={classes.tier_wrapper}>
          <p>User’s Tier</p>
          <div>
            <DPIconStarIcon />
            <DPIconStarOutlineIcon />
            <DPIconStarOutlineIcon />
          </div>
        </div>

        <div className={classes.user_record}>
          <p>₦200,000.00</p>
          <span>9912345678/Providus Bank</span>
        </div>
      </div>

      <Tab tabs={userTabs} />
    </>
  );
};

export default UserTab;
