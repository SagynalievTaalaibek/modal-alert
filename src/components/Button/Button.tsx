import React from 'react';

interface Props {
  type: string;
  label: string;
  onClick: React.MouseEventHandler | undefined;
}

const Button: React.FC<Props> = ({ type, label, onClick }) => {
  return (
    <>
      <button className={`me-2 btn btn-${type}`} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
