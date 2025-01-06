import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="fixed w-full z-10">
      <Menu
        theme="dark"
        mode="horizontal"
        className="flex items-center"
        items={[
          { key: '1', label: <Link to="/">Home</Link> },
          { key: '2', label: <Link to="/about">About</Link> },
          { key: '3', label: <Link to="/contact">Contact</Link> },
        ]}
      />
    </AntHeader>
  );
};

export default Header; 