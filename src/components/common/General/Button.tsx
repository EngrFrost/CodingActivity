import { FC } from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <AntButton {...props}>{children}</AntButton>
);

export { Button }; 