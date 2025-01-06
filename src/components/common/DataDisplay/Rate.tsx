import { FC } from 'react';
import { Rate as AntRate, RateProps } from 'antd';

const Rate: FC<RateProps> = (props) => <AntRate {...props} />;

export { Rate }; 