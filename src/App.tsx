import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/common';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header />
        <Content />
        <Footer />
        <Toaster
          toastOptions={{
            className: '',
            style: {
              background: '#222222',
              color: '#FFFFFF',
              border: '1px solid #333333',
            },
            success: {
              iconTheme: {
                primary: '#913FE2',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#ff4d4f',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </Layout>
    </Router>
  );
}

export default App;
