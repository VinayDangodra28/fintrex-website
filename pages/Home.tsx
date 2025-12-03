import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
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
    <div className="bg-black text-white overflow-hidden">
      <Helmet>
        <title>Fintrex | AI Accounting Automation for Indian CAs</title>
        <meta name="description" content="Automate 70% of your accounting work with AI. Zero manual data entry, instant GST filing, and 99.9% accuracy. Join 150+ CAs who've transformed their practice." />
      </Helmet>
      <Hero />
      
      {/* Metrics Strip */}
      <div className="border-y border-white/10 bg-neutral-900/50 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Data Accuracy", value: "99.9%" },
              { label: "Faster Processing", value: "70%" },
              { label: "Invoices Automated", value: "5000+" },
              { label: "Secure Uptime", value: "24/7" }
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
      <section className="py-16 md:py-20 bg-white/5 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
             <div className="lg:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center">
              {/* Agent Fin Animation */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-[280px] md:max-w-[400px] relative z-10"
              >
                 <AgentFin className="w-full h-full drop-shadow-[0_0_50px_rgba(0,255,136,0.2)]" />
              </motion.div>
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand/10 blur-[80px] rounded-full z-0" />
            </div>
            
            <div className="lg:w-1/2">
              <FadeIn>
                <div className="inline-block px-3 py-1 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-bold mb-4">
                  MEET YOUR NEW PARTNER
                </div>
                <h2 className="text-3xl md:text-5xl font-heading mb-6">Hello, I'm <span className="text-brand">Fin.</span></h2>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  I'm the silicon accountant that never sleeps. I process invoices, validate data, and ensure compliance 24/7. While I handle the routine work, you can focus on high-value advisory for your clients.
                </p>
                
                <div className="space-y-4">
                  {[
                    { name: "Cognitive Context Engine", role: "Thinks Like a Human", score: "Superhuman" },
                    { name: "Rapid Extraction Core", role: "Works at Light Speed", score: "Instant" },
                    { name: "Precision Vision Module", role: "Sees Every Detail", score: "Flawless" },
                    { name: "Secure Local Processing", role: "Ironclad Privacy", score: "Encrypted" }
                  ].map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md">
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
                title: "Branded Client Portal",
                desc: "A fully white-labeled, professionally branded portal for seamless invoice management. Showcase your firm's identity on web and mobile."
              },
              {
                icon: <Zap className="w-6 h-6 text-brand" />,
                title: "Intelligent Invoice Capture",
                desc: "Harness advanced AI-driven OCR to extract details with unmatched accuracy. Eliminates manual data entry entirely."
              },
              {
                icon: <Cpu className="w-6 h-6 text-brand" />,
                title: "Automated Data Processing",
                desc: "Automatically validate, organize, and format invoice data. Integrates with Tally and other leading accounting platforms."
              },
              {
                icon: <Layers className="w-6 h-6 text-brand" />,
                title: "GL Code Mapping",
                desc: "Simplify accounting with precise General Ledger code mapping. Ensures every entry is correctly categorized."
              },
              {
                icon: <UploadCloud className="w-6 h-6 text-brand" />,
                title: "Multi-Channel Upload",
                desc: "Effortless submission. Clients can scan, upload, or submit invoices via WhatsApp integration from anywhere."
              },
              {
                icon: <Timer className="w-6 h-6 text-brand" />,
                title: "Real-Time Data Finalization",
                desc: "Receive consolidated, verified financial data in real time. Minimize manual intervention and accelerate filing."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-brand" />,
                title: "Secure Data Management",
                desc: "Enterprise-grade encryption and SOC 2 compliance. We prioritize data security and your peace of mind."
              }
            ].map((feature, idx) => (
              <SpotlightCard key={idx} className={`h-full ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
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
              { step: "01", title: "Capture", desc: "Upload or scan invoices instantly via App or WhatsApp." },
              { step: "02", title: "Process", desc: "AI extracts, validates, and categorizes data." },
              { step: "03", title: "Finalize", desc: "Data is mapped to GL codes and ready for Tally." },
              { step: "04", title: "Deliver", desc: "Clients access branded reports on your portal." }
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
                Why FinTrex?
              </h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-10 text-neutral-700">
                FinTrex isn’t just another accounting tool—it’s an <span className="text-brand-dark bg-brand-light px-2 rounded">industry-layer</span> that changes how CA firms operate.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <p className="font-medium text-neutral-800">Moves accounting from compliance-only to compliance + real-time insights.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <p className="font-medium text-neutral-800">Reduces dependency on manpower, solving staffing and attrition challenges.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <p className="font-medium text-neutral-800">Provides a sticky SaaS experience, keeping clients engaged and loyal.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                    <p className="font-medium text-neutral-800">Massive market potential built for mandatory GST compliance.</p>
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
             Join the <span className="text-brand">Waitlist</span>
           </h2>
           <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
             Be among the first to automate your practice. Early access members get locked-in pricing for life.
           </p>
           <WaitlistInput />
        </div>
      </section>
    </div>
  );
};

export default Home;