import React from 'react';
import classes from './UserGuarantor.module.scss';

const UserGuarantor = () => {
  return (
    <>
      <div className={classes.user_guarantor__info}>
        <div className={classes.guarantor_item}>
          <h6>FULL NAME</h6>
          <p>Debby Oganam</p>
        </div>
        <div className={classes.info_item}>
          <h6>PHONE NUMBER</h6>
          <p> 07060780922</p>
        </div>
        <div className={classes.info_item}>
          <h6>EMAIL ADDRESS</h6>
          <p>debby@gmail.com</p>
        </div>
        <div className={classes.info_item}>
          <h6>RELATIONSHIP</h6>
          <p>Sister</p>
        </div>
      </div>
    </>
  );
};

export default UserGuarantor;
