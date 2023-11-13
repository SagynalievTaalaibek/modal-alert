import React from 'react';

export interface ButtonType {
  id: number;
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}

export interface AlertShow {
  id: number;
  show: boolean;
  type: string;
  message: string;
  clickDismissible: boolean;
}
