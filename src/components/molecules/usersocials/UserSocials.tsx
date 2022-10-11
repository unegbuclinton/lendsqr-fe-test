import React from 'react';
import classes from './UserSocials.module.scss';

const UserSocials = () => {
  return (
    <>
      <div className={classes.user_socials__info}>
        <div className={classes.socials_item}>
          <h6>TWITTER</h6>
          <p>@grace_effiom</p>
        </div>
        <div className={classes.info_item}>
          <h6>FACEBOOK</h6>
          <p> Grace Effiom</p>
        </div>
        <div className={classes.info_item}>
          <h6>INSTAGRAM</h6>
          <p>@grace_effiom</p>
        </div>
      </div>
    </>
  );
};

export default UserSocials;
