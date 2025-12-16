import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../constants';
import { FadeIn, WaitlistInput } from '../components/ui/Motion';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-20 bg-black min-h-screen text-white" id="pricing">
      <Helmet>
        <title>Pricing | Fintrex AI Accounting - Affordable Plans with Fin AI Assistant</title>
        <meta name="description" content="Transparent pricing for Fintrex AI accounting automation with Fin assistant. From ₹1,599/month for individual CAs to enterprise solutions. Lock in early access rates forever. No hidden fees. Scale as you grow with powerful AI features." />
        <meta name="keywords" content="Fintrex pricing, AI accounting software cost, CA software pricing India, accounting automation pricing, Fin AI assistant cost, GST software pricing, early access pricing, accounting software plans" />
        <link rel="canonical" href="https://fintrex.ai/pricing" />
        
        {/* Pricing Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Fintrex Pricing Plans",
            "description": "Affordable AI accounting automation plans with Fin AI assistant",
            "url": "https://fintrex.ai/pricing"
          })}
        </script>
        
        {/* Product Offers Schema */}
        <script type="application/ld+json">
          {JSON.stringify(PRICING_PLANS.map((plan, index) => ({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": `Fintrex ${plan.name} Plan`,
            "description": plan.idealFor,
            "price": annual ? plan.priceAnnual : plan.priceMonth,
            "priceCurrency": "INR",
            "priceValidUntil": "2025-12-31",
            "availability": "https://schema.org/PreOrder",
            "seller": {
              "@type": "Organization",
              "name": "Fintrex AI"
            },
            "itemOffered": {
              "@type": "Service",
              "name": `Fintrex ${plan.name} - AI Accounting Automation`,
              "description": plan.features.join(", ")
            }
          })))}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-brand/10 border border-brand/30 rounded-full text-brand text-xs font-bold uppercase tracking-wide">
             Coming Soon
          </div>
          <h1 className="text-3xl md:text-6xl font-heading mb-4">Early Access Pricing</h1>
          <p className="text-gray-400 text-lg">
             Join the waitlist to lock in these rates forever. No hidden fees. Scale as you grow.
          </p>
          
          <div className="mt-8 inline-flex items-center bg-white/5 p-1 rounded-full border border-white/10">
            <button 
              onClick={() => setAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-brand text-black shadow-[0_0_15px_rgba(0,255,136,0.4)]' : 'text-gray-400 hover:text-white'}`}
            >
              Annual <span className="text-[10px] font-bold bg-black/20 px-1.5 rounded">SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {PRICING_PLANS.map((plan, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="relative">
               {plan.isPopular && (
                 <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                   <div className="bg-gradient-to-r from-brand to-brand-light text-black text-xs font-bold px-4 py-1 rounded-full shadow-[0_0_15px_rgba(0,255,136,0.4)]">
                     MOST POPULAR
                   </div>
                 </div>
               )}
               <div className={`h-full p-8 rounded-2xl border flex flex-col relative overflow-hidden group transition-all duration-300 ${plan.isPopular ? 'bg-brand-charcoal border-brand/50 shadow-[0_0_30px_-10px_rgba(0,255,136,0.15)] scale-105' : 'bg-black border-white/10 hover:border-brand/30'}`}>
                  
                  <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.idealFor}</p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold">₹{annual ? plan.priceAnnual.toLocaleString() : plan.priceMonth.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm">/month</span>
                    {annual && <div className="text-xs text-brand mt-1">Billed annually</div>}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <Check className="w-4 h-4 text-brand mr-2 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => {
                      const waitlistForm = document.getElementById('waitlist-form');
                      if (waitlistForm) {
                        waitlistForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className={`w-full py-3 rounded-lg font-bold transition-all border ${plan.isPopular ? 'bg-brand text-black border-brand hover:bg-brand-light' : 'bg-transparent text-white border-white/20 hover:border-brand hover:text-brand'}`}
                  >
                    Join Waitlist
                  </button>
               </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Waitlist CTA */}
        <div className="max-w-xl mx-auto text-center pt-10 border-t border-white/10">
            <h3 className="text-2xl font-heading mb-6">Ready to transform your practice?</h3>
            <WaitlistInput />
        </div>
      </div>
    </div>
  );
};

export default Pricing;