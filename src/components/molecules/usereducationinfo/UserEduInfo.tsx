import React from 'react';
import classes from './UserEduInfo.module.scss';

const UserEduInfo = () => {
  return (
    <>
      <div className={classes.user_edu__info}>
        <div className={classes.info_item}>
          <h6>LEVEL OF EDUCATION</h6>
          <p>B.Sc</p>
        </div>
        <div className={classes.info_item}>
          <h6>EMPLOYMENT STATUS</h6>
          <p> Employed</p>
        </div>
        <div className={classes.info_item}>
          <h6>SECTOR OF EMPLOYMENT</h6>
          <p>FinTech</p>
        </div>

        <div className={classes.info_item}>
          <h6>DURATION OF EMPLOYMENT</h6>
          <p>2 years</p>
        </div>
        <div className={classes.info_item}>
          <h6>OFFICE EMMAIL</h6>
          <p>grace@lendsqr.com</p>
        </div>
        <div className={classes.info_item}>
          <h6>MONTHLY INCOME</h6>
          <p>₦200,000.00- ₦400,000.00</p>
        </div>
        <div className={classes.info_item}>
          <h6>LOAN REPAYMENT</h6>
          <p>40,000</p>
        </div>
      </div>
    </>
  );
};

export default UserEduInfo;
