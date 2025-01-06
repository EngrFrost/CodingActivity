import { Typography } from 'antd';

const { Title } = Typography;

const About = () => {
  return (
    <div className="p-8">
      <Title>About Us</Title>
      <p className="text-lg">This is the about page content.</p>
    </div>
  );
};

export default About; 