import React from 'react';
import { DPIconSearchIcon } from '../../../icons';

import classes from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={classes.search_bar__wrapper}>
      <input type="text" />
      <div className={classes.search_icon}>
        <DPIconSearchIcon />
      </div>
    </div>
  );
};

export default SearchBar;
