import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FinStory from '../components/FinStory';
import { FadeIn, SpotlightCard, ScaleIn, WaitlistInput } from '../components/ui/Motion';
import { AppLogo, AgentFin } from '../components/ui/BrandAssets';
import { 
  MessageCircle, 
  FileJson, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Check, 
  PhoneCall, 
  Keyboard, 
  AlertTriangle, 
  Layers,
  Globe,
  UploadCloud,
  LayoutDashboard,
  Timer
} from 'lucide-react';
import { TESTIMONIALS, FAQS_SHORT } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Helmet>
        <title>Fintrex | AI Accounting Automation for Indian CAs - Meet Fin Your AI Assistant</title>
        <meta name="description" content="Meet Fin, your 24/7 AI accounting assistant. Automate 70% of your accounting work with AI-powered invoice extraction, instant GST filing, and 99.9% accuracy. Join 150+ CAs who've transformed their practice. Zero manual data entry." />
        <meta name="keywords" content="Fin AI assistant, AI accounting automation, chartered accountant software India, GST filing automation, invoice extraction AI, WhatsApp accounting, Tally integration, CA practice management, automated bookkeeping India, financial reporting automation" />
        <link rel="canonical" href="https://fintrex.ai" />
        
        {/* Home Page Specific Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fintrex - AI Accounting Automation Platform",
            "description": "Meet Fin, your AI accounting assistant that never sleeps. Automate invoice processing, GST filing, and financial reporting with 99.9% accuracy.",
            "url": "https://fintrex.ai",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://fintrex.ai/fin-hero-image.png"
            },
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Fintrex",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "1599",
                "highPrice": "7999",
                "priceCurrency": "INR",
                "offerCount": "3"
              }
            },
            "about": {
              "@type": "Service",
              "serviceType": "AI Accounting Automation",
              "provider": {
                "@type": "Organization",
                "name": "Fintrex AI"
              },
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Accounting Automation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Invoice Extraction"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Automated GST Filing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Real-time Financial Reporting"
                    }
                  }
                ]
              }
            }
          })}
        </script>
      </Helmet>
      <Hero />
      
      {/* Metrics Strip */}
      <div className="border-y border-white/10 bg-neutral-900/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Data Accuracy", value: "99.9%" },
              { label: "Manual Work Reduced", value: "80%" },
              { label: "Documents Processed", value: "5000+" },
              { label: "Real-time Visibility", value: "24/7" }
            ].map((stat, i) => (
              <div key={i} className="py-6 md:py-8 text-center">
                <div className="text-2xl md:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-sm text-brand uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-brand-charcoal/30 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading text-center mb-4">
              Manual Work Kills Growth
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
              60-70% of a CA's time is wasted on tasks that can be automated. Stop the madness.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PhoneCall className="w-8 h-8 text-red-400" />,
                title: "Chasing Clients",
                desc: "Calls for PAN cards, lost WhatsApp messages, and missed deadlines.",
                quote: "I spend 2 hours a day just calling clients."
              },
              {
                icon: <Keyboard className="w-8 h-8 text-orange-400" />,
                title: "Manual Data Entry",
                desc: "Typing 100 invoices/client. Human errors in GST amounts.",
                quote: "Every invoice takes 10 minutes to type."
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />,
                title: "GST Nightmares",
                desc: "Excel formulas breaking, ITC mismatches, last-minute panic.",
                quote: "I stay up till 3 AM on the 20th."
              }
            ].map((item, idx) => (
              <SpotlightCard key={idx} className="h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-4 p-3 bg-white/5 rounded-lg inline-block">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm flex-grow">{item.desc}</p>
                  <div className="pl-4 border-l-2 border-white/10 italic text-xs text-gray-500">
                    "{item.quote}"
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Fin Section */}
      <section className="py-12 md:py-20 bg-white/5 border-y border-white/10 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
             <div className="w-full lg:w-1/2 relative">
                <FinStory />
            </div>
            
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="inline-block px-3 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-bold mb-4">
                  THE OPERATING SYSTEM
                </div>
                <h2 className="text-3xl md:text-5xl font-heading mb-6">The Foundation of <span className="text-brand">Modern Finance.</span></h2>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  Fintrex.ai is not just automation. It’s the foundation of the modern financial operating system, making CA firms indispensable partners to MSMEs.
                </p>
                
                <div className="space-y-4">
                  {[
                    { name: "Unified Client Workspaces", role: "No lost documents", score: "Organized" },
                    { name: "Automated Accounting", role: "Ledger entries auto-posted", score: "Accurate" },
                    { name: "Advanced Reporting", role: "Real-time dashboards", score: "Insightful" },
                    { name: "Compliance Coordination", role: "Proactive alerts", score: "Effortless" }
                  ].map((tech, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md gap-2 sm:gap-0">
                      <div>
                        <h4 className="font-bold text-white">{tech.name}</h4>
                        <p className="text-xs text-gray-500">{tech.role}</p>
                      </div>
                      <div className="text-brand font-mono font-bold text-sm">{tech.score}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" id="features">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
           <FadeIn className="mb-12 md:mb-16 text-center">
            <span className="text-brand font-bold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading mt-2">
              The <span className="text-brand-light">FinTrex</span> Advantage
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <LayoutDashboard className="w-6 h-6 text-brand" />,
                title: "Unified Client Workspaces",
                desc: "Bills, invoices, receipts, and statements flow seamlessly via WhatsApp or direct upload. Documents are automatically organized, cleaned, and classified."
              },
              {
                icon: <Zap className="w-6 h-6 text-brand" />,
                title: "Automated Accounting",
                desc: "Ledger entries suggested or auto-posted with seamless Tally sync. Anomalies flagged instantly. Final accounts generated automatically."
              },
              {
                icon: <Cpu className="w-6 h-6 text-brand" />,
                title: "Advanced Reporting",
                desc: "Real-time dashboards showing revenue, expenses, and cash flow. Forecasting and budget tracking for CFO-level visibility."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-brand" />,
                title: "Compliance Coordination",
                desc: "GST/TDS data readiness, missing document detection, and ITC tracking. Compliance becomes effortless and proactive."
              },
              {
                icon: <MessageCircle className="w-6 h-6 text-brand" />,
                title: "Collaboration Layer",
                desc: "A unified communication framework for queries, approvals, and document requests. Full traceability and no miscommunication."
              },
              {
                icon: <Globe className="w-6 h-6 text-brand" />,
                title: "Multi-Firm Management",
                desc: "View the health of all clients in one dashboard. Track pending tasks, assign roles, and monitor real-time progress."
              }
            ].map((feature, idx) => (
              <SpotlightCard key={idx} className="h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Simplified) */}
      <section className="py-16 md:py-20 bg-brand-charcoal/20 relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Tech Background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h2 className="text-center text-3xl font-heading mb-12 md:mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Unified Intake", desc: "Bills, invoices, and receipts flow seamlessly from any source." },
              { step: "02", title: "Auto-Accounting", desc: "Raw data transforms into clean, structured financials instantly." },
              { step: "03", title: "Deep Insights", desc: "Real-time dashboards for revenue, expenses, and cash flow." },
              { step: "04", title: "Proactive Compliance", desc: "Effortless GST/TDS readiness with automated alerts." }
            ].map((item, i) => (
              <div key={i} className="relative p-6 border border-white/10 rounded-2xl bg-black hover:border-brand/50 transition-colors group">
                 <div className="text-5xl font-heading font-bold text-white/5 absolute top-4 right-4 group-hover:text-brand/10 transition-colors">{item.step}</div>
                 <h3 className="text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                 <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-black to-black" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-sm font-medium tracking-wide uppercase mb-8">
              Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
              The Operating System for <br />
              <span className="text-brand">Modern Finance</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              "Fintrex.ai is building the future of CA–MSME financial collaboration — an intelligent, automated, and scalable ecosystem that transforms compliance into strategy and data into actionable insight."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why FinTrex Section */}
      <section className="py-16 md:py-24 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Side */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Accounting Firm" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 to-transparent" />
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-black">
                Why Fintrex.ai Stands Apart
              </h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 text-neutral-700">
                Fintrex.ai is building the future of CA–MSME financial collaboration — an <span className="text-brand-dark bg-brand-light px-2 rounded">intelligent ecosystem</span> that transforms compliance into strategy.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="font-medium text-neutral-800">Cuts 60–80% of manual accounting work.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="font-medium text-neutral-800">Eliminates follow-up chaos and miscommunication.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="font-medium text-neutral-800">Enables high-quality advisory and faster reporting.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                    <p className="font-medium text-neutral-800">Scales CA firms without extra hires.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 overflow-hidden bg-black text-white">
        <div className="container mx-auto px-4 max-w-7xl">
           <h2 className="text-center text-3xl md:text-4xl font-heading mb-12 md:mb-16">Trusted by CAs across India</h2>
           <div className="flex flex-wrap justify-center gap-8">
             {TESTIMONIALS.map((t, i) => (
               <ScaleIn key={i} delay={i * 0.1} className="w-full md:w-[350px]">
                 <SpotlightCard className="h-full">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-center gap-1 mb-4 text-yellow-400">
                        {[...Array(5)].map((_,star)=><span key={star}>★</span>)}
                      </div>
                      <p className="text-gray-300 italic mb-6 flex-grow">"{t.quote}"</p>
                      <div className="border-t border-white/10 pt-4">
                        <h4 className="font-bold text-white">{t.name}</h4>
                        <p className="text-xs text-brand">{t.role}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {t.stats.map((s, si) => (
                            <span key={si} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-400">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                 </SpotlightCard>
               </ScaleIn>
             ))}
           </div>
        </div>
      </section>

      {/* Bottom CTA / Waitlist */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="City Skyline" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent z-0" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
           <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white">
             Join the <span className="text-brand">Future of Finance</span>
           </h2>
           <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
             Transform compliance into strategy and data into actionable insight. Be among the first to experience the operating system for modern finance.
           </p>
           <WaitlistInput />
        </div>
      </section>
    </div>
  );
};

export default Home;