import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, FileText } from 'lucide-react';
import { PRIVACY_POLICY, LegalDocument } from '../content/legal';

const PrivacyPolicy: React.FC = () => {
  const doc: LegalDocument = PRIVACY_POLICY;
  const [activeSection, setActiveSection] = React.useState<string>(doc.sections[0]?.id || '');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>{doc.seo.metaTitle}</title>
        <meta name="description" content={doc.seo.metaDescription} />
        <meta name="keywords" content={doc.seo.keywords.join(', ')} />
        <link rel="canonical" href="https://fintrex.ai/privacy-policy" />
        <meta property="og:title" content={doc.seo.metaTitle} />
        <meta property="og:description" content={doc.seo.metaDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen bg-black pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-brand transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">Privacy Policy</span>
            </nav>
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 mb-6">
              <Shield className="text-brand" size={32} />
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              {doc.title}
            </h1>
            
            <p className="text-gray-400">
              Last updated: {new Date(doc.lastUpdated).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-28">
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Contents
                </h2>
                <nav className="space-y-1">
                  {doc.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'bg-brand/10 text-brand'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 min-w-0"
            >
              <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 md:p-10">
                {doc.sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className={index > 0 ? 'pt-10 mt-10 border-t border-white/5' : ''}
                  >
                    <h2 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-brand">{index + 1}.</span>
                      {section.title}
                    </h2>
                    <div className="prose prose-invert prose-sm max-w-none
                      prose-headings:font-heading prose-headings:font-semibold
                      prose-h3:text-lg prose-h3:text-gray-200 prose-h3:mt-6 prose-h3:mb-2
                      prose-p:text-gray-400 prose-p:leading-relaxed
                      prose-strong:text-white
                      prose-ul:text-gray-400 prose-ul:my-4
                      prose-li:my-1 prose-li:marker:text-brand
                      prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                    ">
                      {section.content.split('\n').map((paragraph, pIdx) => {
                        if (paragraph.startsWith('### ')) {
                          return <h3 key={pIdx}>{paragraph.replace('### ', '')}</h3>;
                        }
                        if (paragraph.startsWith('- ')) {
                          return null; // Handle lists separately
                        }
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return <p key={pIdx}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>;
                        }
                        if (paragraph.trim()) {
                          // Check for list items
                          const lines = section.content.split('\n');
                          const listItems = lines.filter(l => l.startsWith('- '));
                          if (listItems.length > 0 && paragraph === lines.find(l => l.startsWith('- '))) {
                            return (
                              <ul key={pIdx}>
                                {listItems.map((item, iIdx) => (
                                  <li key={iIdx} dangerouslySetInnerHTML={{ 
                                    __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                  }} />
                                ))}
                              </ul>
                            );
                          }
                          return <p key={pIdx} dangerouslySetInnerHTML={{ 
                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          }} />;
                        }
                        return null;
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 p-6 bg-neutral-900/30 border border-white/5 rounded-2xl">
                <div className="flex items-start gap-4">
                  <FileText className="text-brand flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Questions?</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      If you have any questions about this Privacy Policy, please contact us at{' '}
                      <a href="mailto:privacy@fintrex.ai" className="text-brand hover:underline">
                        privacy@fintrex.ai
                      </a>
                    </p>
                    <Link
                      to="/terms"
                      className="text-brand text-sm hover:underline"
                    >
                      View Terms of Service →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
