import { useState } from 'react';
import Modal from './components/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const changeModalShow = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <h4>Modal</h4>
      <button onClick={changeModalShow}>Show modal</button>
      <div className="row">
        <div className="col-6">
          <Modal show={showModal} title="Modal title" onClose={changeModalShow}>
            <p>Hello world</p>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default App;
