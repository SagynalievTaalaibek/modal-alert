import React from 'react';

export interface ButtonType {
  id: number;
  type: string;
  label: string;
  onClick: React.MouseEventHandler;
}
