import React from 'react';
import classes from './ErrorMsg.module.scss';

interface Props {
  text: string;
}
const ErrorMsg: React.FC<Props> = ({ text }) => {
  return <p className={classes.error_text}>{text}</p>;
};

export default ErrorMsg;
