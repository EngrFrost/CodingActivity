import { Typography } from 'antd';

const { Title } = Typography;

const Home = () => {
  return (
    <div className="p-8">
      <Title>Welcome to Home Page</Title>
      <p className="text-lg">This is the home page content.</p>
    </div>
  );
};

export default Home; 