import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import CaseStudiesList from './pages/CaseStudiesList';
import CaseStudyPage from './pages/CaseStudyPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
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
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* Case Studies Routes */}
            <Route path="/case-studies" element={<CaseStudiesList />} />
            <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;