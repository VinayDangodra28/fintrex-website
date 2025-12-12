import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, Youtube, Instagram, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ElasticButton } from './ui/Motion';
import { AppLogo } from './ui/BrandAssets';
import FinChatbot from './FinChatbot';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToWaitlist = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-body selection:bg-brand selection:text-black">
      {/* Floating Navbar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <nav 
            className={`mx-auto max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-6 py-3 ${
              isScrolled 
                ? 'bg-neutral-900/80 backdrop-blur-xl border-white/10 shadow-2xl' 
                : 'bg-transparent border-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <AppLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
              <span className="font-heading font-bold text-xl tracking-wide">Fintrex</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand ${
                    location.pathname === link.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <ElasticButton onClick={scrollToWaitlist} className="!px-6 !py-2 text-sm">
                Join Waitlist
              </ElasticButton>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className="text-2xl font-heading font-bold text-gray-300 hover:text-brand"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  scrollToWaitlist();
                }}
                className="mt-4 bg-brand text-black px-8 py-3 rounded-full font-bold text-lg w-full max-w-xs"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      <FinChatbot />

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/5 pt-20 pb-10 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <AppLogo className="w-10 h-10" />
                <span className="font-heading font-bold text-xl">Fintrex</span>
              </div>
              <p className="text-gray-500 mb-8 max-w-sm">
                Automating the future of accounting for Indian CAs. 
                Focus on advisory, leave the data entry to AI.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Youtube size={20} />, href: "#" },
                  { icon: <Instagram size={20} />, href: "#" }
                ].map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand hover:text-black transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Case Studies Column */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Case Studies</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Scaling to 100 Clients</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">GST Filing Automation</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">CA Rajesh's Success</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Zero-Touch Tax Season</a></li>
              </ul>
            </div>

            {/* Resources/Blog Column */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Blog: AI vs Manual Entry</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Future of CA Practice</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Roadmap</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Community</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-heading font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Contact</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand hover:underline hover:underline-offset-4 transition-all duration-300">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Fintrex AI. All rights reserved.
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand transition-colors"
            >
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;