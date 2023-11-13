import { useState } from 'react';
import Modal from './components/Modal/Modal';
import { ButtonType } from './types';
import Button from './components/Button/Button';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const changeModalShow = () => {
    setShowModal((prevState) => !prevState);
  };

  const buttonType: ButtonType[] = [
    { id: 1, type: 'primary', label: 'Continue', onClick: changeModalShow },
    { id: 2, type: 'danger', label: 'Close', onClick: changeModalShow },
  ];

  return (
    <>
      <h4>Modal</h4>
      <Button type={'success'} label={'Show modal'} onClick={changeModalShow} />
      <div className="row">
        <div className="col-6">
          <Modal
            show={showModal}
            title="Modal title"
            onClose={changeModalShow}
            buttonType={buttonType}
          >
            <p>Hello world</p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default App;
