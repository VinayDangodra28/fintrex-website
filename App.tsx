import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;