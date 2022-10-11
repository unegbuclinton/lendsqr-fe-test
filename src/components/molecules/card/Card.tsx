import React, { ReactNode } from 'react';
import classes from './Card.module.scss';

interface Props {
  icon: ReactNode;
  text: string;
  value: number;
}
const Card: React.FC<Props> = ({ text, value, icon }) => {
  return (
    <div className={classes.card_wrapper}>
      {icon}
      <h6>{text}</h6>
      <p>{value?.toLocaleString()}</p>
    </div>
  );
};

export default Card;
