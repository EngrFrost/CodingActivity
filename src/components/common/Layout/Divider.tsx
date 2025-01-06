import { FC } from 'react';
import { Divider as AntDivider, DividerProps } from 'antd';

const Divider: FC<DividerProps> = ({ children, ...props }) => (
  <AntDivider {...props}>{children}</AntDivider>
);

export { Divider }; 