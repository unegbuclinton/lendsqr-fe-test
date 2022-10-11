import React from 'react';
import classes from './UserPersonalInfo.module.scss';

const UserPeronalInfo = () => {
  return (
    <div className={classes.user_personal__wrapper}>
      <div className={classes.user_personal__info}>
        <div className={classes.info_item}>
          <h6>FULL NAME</h6>
          <p>Grace Effiom</p>
        </div>
        <div className={classes.info_item}>
          <h6>PHONE NUMBER</h6>
          <p> 07060780922</p>
        </div>
        <div className={classes.info_item}>
          <h6>EMAIL ADDRESS</h6>
          <p>grace@gmail.com</p>
        </div>

        <div className={classes.info_item}>
          <h6>BVN</h6>
          <p>07060780922</p>
        </div>
        <div className={classes.info_item}>
          <h6>GENDER</h6>
          <p>FEMALE</p>
        </div>
        <div className={classes.info_item}>
          <h6>MARITAL STATUS</h6>
          <p>SINGLE</p>
        </div>
        <div className={classes.info_item}>
          <h6>CHILDREN</h6>
          <p>NONE</p>
        </div>
        <div className={classes.info_item}>
          <h6>TYPE OF RESIDENCE</h6>
          <p>Parent’s Apartment</p>
        </div>
      </div>
    </div>
  );
};

export default UserPeronalInfo;
