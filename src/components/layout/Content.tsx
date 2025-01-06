import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import About from '../../pages/About';
import Contact from '../../pages/Contact';

const { Content: AntContent } = Layout;

const Content = () => {
  return (
    <AntContent className="pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AntContent>
  );
};

export default Content; 