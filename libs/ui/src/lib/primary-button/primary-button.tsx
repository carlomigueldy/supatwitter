import { Button } from '@chakra-ui/button';
import React from 'react';
import './primary-button.module.scss';

/* eslint-disable-next-line */
export interface PrimaryButtonProps {
  children?: React.ReactNode;
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
  return <Button>{children}</Button>;
}

export default PrimaryButton;
