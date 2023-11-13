import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

interface Props extends React.PropsWithChildren {
  title: string;
  show: boolean;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({ title, show, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} />
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
