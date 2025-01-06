import { FC } from 'react';
import { Card as AntCard, CardProps } from 'antd';

const Card: FC<CardProps> = ({ children, ...props }) => (
  <AntCard {...props}>{children}</AntCard>
);

export { Card }; 