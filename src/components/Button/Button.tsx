import React from 'react';

interface Props {
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<Props> = ({ type, label, onClick }) => {
  const btnClass: string[] = ['btn'];

  if (type) {
    btnClass.push(type);
  }

  return (
    <>
      <button className={'btn ' + btnClass.join('-')} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
