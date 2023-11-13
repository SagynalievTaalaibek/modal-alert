import React from 'react';
import Button from '../Button/Button';

interface Props extends React.PropsWithChildren {
  type: string;
  show: boolean;
  clickDismissible?: boolean;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({
  type,
  show,
  onDismiss,
  clickDismissible,
  children,
}) => {
  return (
    <div
      style={{ display: show ? 'block' : 'none' }}
      className="my-2"
      onClick={!clickDismissible ? onDismiss : undefined}
    >
      <div className={'alert d-flex justify-content-between alert-' + type}>
        <div>{children}</div>
        {onDismiss && clickDismissible ? (
          <Button type={'close'} onClick={onDismiss} label={''} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Alert;
