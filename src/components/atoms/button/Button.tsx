import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className: string;
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
