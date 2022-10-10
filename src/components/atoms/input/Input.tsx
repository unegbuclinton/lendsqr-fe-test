import React, { useState } from 'react';
import classes from './Input.module.scss';

interface Props {
  placeholder?: string;
  type: string;
  className?: string;
  inputClass?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}
const InputField: React.FC<Props> = ({
  placeholder,
  type,
  onBlur,
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const toggleShowPassword = () => setShow((prev) => !prev);
  return (
    <div className={classes.container}>
      <input
        placeholder={placeholder}
        type={type === 'password' ? (show ? 'text' : 'password') : type}
        onChange={onChange}
        onBlur={onBlur}
      />

      {type && (
        <div className={classes.encrypt_toggle} onClick={toggleShowPassword}>
          {show ? <span>HIDE</span> : <span>SHOW</span>}
        </div>
      )}
    </div>
  );
};

export default InputField;
