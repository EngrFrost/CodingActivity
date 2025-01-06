import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="text-center">
      ©{new Date().getFullYear()} Your Company Name
    </AntFooter>
  );
};

export default Footer; 