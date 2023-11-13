import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';
import { ButtonType } from '../../types';

interface Props extends React.PropsWithChildren {
  title: string;
  show: boolean;
  onClose: React.MouseEventHandler;
  buttonType: ButtonType[];
}

const Modal: React.FC<Props> = ({
  title,
  show,
  onClose,
  buttonType,
  children,
}) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <Button type={'close'} label={''} onClick={onClose} />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {buttonType.map((button) => (
                <Button
                  key={button.id}
                  type={button.type}
                  label={button.label}
                  onClick={button.onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
