import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
