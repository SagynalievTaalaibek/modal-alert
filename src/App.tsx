import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Alert from './components/Alert/Alert';
import { AlertShow, ButtonType } from './types';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState<AlertShow[]>([
    {
      id: 1,
      show: false,
      type: 'success',
      message: 'Success message, Click Dismissible: true',
      clickDismissible: false,
    },
    {
      id: 2,
      show: false,
      type: 'warning',
      message: 'Warning message, Click Dismissible: false',
      clickDismissible: true,
    },
    {
      id: 3,
      show: false,
      type: 'danger',
      message: 'Danger message, Click Dismissible: true',
      clickDismissible: false,
    },
    {
      id: 4,
      show: false,
      type: 'primary',
      message: 'Continue, Click Dismissible: true',
      clickDismissible: false,
    },
  ]);

  const changeModalShow = () => {
    setShowModal((prevState) => !prevState);
  };

  const changeAlertShow = (id: number) => {
    setShowAlert((prevState) =>
      prevState.map((alert) => {
        if (id === alert.id) {
          return { ...alert, show: !alert.show };
        }

        return alert;
      }),
    );
  };

  const buttonType: ButtonType[] = [
    {
      id: 1,
      type: 'primary',
      label: 'Continue',
      onClick: () => changeAlertShow(4),
    },
    { id: 2, type: 'danger', label: 'Close', onClick: changeModalShow },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Modal</h4>
            <Button
              type={'primary'}
              label={'Show modal'}
              onClick={changeModalShow}
            />
            <Modal
              show={showModal}
              title="Modal title"
              onClose={changeModalShow}
              buttonType={buttonType}
            >
              <p>Hello world</p>
            </Modal>
          </div>
          <div className="col-6">
            <h4 className="mb-2">Alert</h4>
            <Button
              type={'success'}
              label={'Show Success Alert'}
              onClick={() => changeAlertShow(1)}
            />
            <Button
              type={'warning'}
              label={'Show Warning Alert'}
              onClick={() => changeAlertShow(2)}
            />
            <Button
              type={'danger'}
              label={'Show Danger Alert'}
              onClick={() => changeAlertShow(3)}
            />
            {showAlert.map((alert) => (
              <Alert
                key={alert.id}
                show={alert.show}
                type={alert.type}
                onDismiss={() => changeAlertShow(alert.id)}
                clickDismissible={alert.clickDismissible}
              >
                {alert.message}
              </Alert>
            ))}
            <Alert type={'primary'} show={true}>
              Without Dismiss
            </Alert>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
