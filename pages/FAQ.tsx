import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FAQS_FULL } from '../constants';
import { FadeIn } from '../components/ui/Motion';

const FAQ = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen text-white">
      <Helmet>
        <title>FAQ | Fintrex - Your Questions About Fin AI Assistant Answered</title>
        <meta name="description" content="Get answers to common questions about Fintrex AI accounting automation and Fin, our AI assistant. Learn about pricing, security, integrations, AI accuracy, and how we help CA firms scale with 99.9% accuracy." />
        <meta name="keywords" content="Fintrex FAQ, Fin AI assistant questions, accounting automation questions, CA software help, AI invoice accuracy, pricing, security, Tally integration, WhatsApp accounting setup" />
        <link rel="canonical" href="https://fintrex.ai/faq" />
        
        {/* FAQ Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_FULL.flatMap(category => 
              category.questions.map(q => ({
                "@type": "Question",
                "name": q.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": q.a
                }
              }))
            )
          })}
        </script>
        
        {/* Additional Question Schema about Fin AI */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Question",
            "name": "What is Fin and how does it help with accounting automation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fin is Fintrex's AI accounting assistant that works 24/7 to automate invoice processing, data extraction, and compliance validation. Fin achieves 99.9% accuracy in document extraction and can process invoices, validate GST data, and prepare financial reports automatically, allowing CAs to focus on high-value advisory work."
            }
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-400">Everything you need to know about Fintrex.</p>
        </div>

        <div className="space-y-8">
          {FAQS_FULL.map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <h2 className="text-2xl font-heading text-brand mb-6 border-b border-brand/20 pb-2">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((q, i) => (
                  <details key={i} className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 open:border-brand/30 transition-colors">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-bold text-lg">{q.q}</span>
                      <span className="transform transition group-open:rotate-180 text-brand">▼</span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {q.a}
                    </div>
                  </details>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;