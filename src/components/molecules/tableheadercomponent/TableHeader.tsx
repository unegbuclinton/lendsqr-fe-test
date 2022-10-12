import React from 'react';
import { DPIconFilter } from '../../../icons';
import classes from './TableHeader.module.scss';

interface Prop {
  text: string;
}
const TableHeader: React.FC<Prop> = ({ text }) => {
  return (
    <div className={classes.header_wrapper}>
      {text}
      <span>
        <DPIconFilter />
      </span>
    </div>
  );
};

export default TableHeader;
