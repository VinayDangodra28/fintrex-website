import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FadeIn, SpotlightCard } from '../components/ui/Motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamMember = ({ name, role, image }: { name: string, role: string, image?: string }) => (
  <SpotlightCard className="h-full">
    <div className="p-6 flex flex-col items-center text-center h-full">
      <div className="w-24 h-24 rounded-full bg-neutral-800 mb-4 overflow-hidden border-2 border-brand/20">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-brand">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-brand mb-4">{role}</p>
      {/* <div className="flex gap-3 mt-auto">
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
      </div> */}
    </div>
  </SpotlightCard>
);

const About: React.FC = () => {
  const founders = [
    { name: "Tanish Panchamia", role: "Founder & CEO" },
    { name: "Arzan Khan", role: "Founder & CTO" },
    { name: "Het Shah", role: "Co-Founder & COO" },
    { name: "Akshat Mehta", role: "Co-Founder" },
    { name: "Vinay Dangodra", role: "Co-Founder & CDO" },
  ];

  const mentors = [
    { name: "Ashish Dhuvad", role: "Mentor" },
    { name: "Dilip Singh", role: "Mentor" },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <Helmet>
        <title>About Us | Fintrex - The Future of CA-MSME Finance</title>
        <meta name="description" content="Meet the team building the operating system for modern finance. Fintrex.ai connects businesses' financial operations directly with CA workflows." />
      </Helmet>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Vision Section */}
        <section className="mb-24 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Our <span className="text-brand">Vision</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                Fintrex.ai is building the complete automation ecosystem for CA firms and MSMEs. 
                We connect businesses’ financial operations directly with CA workflows — today, tomorrow, and beyond — 
                enabling smarter decisions, faster reporting, and real-time financial clarity.
              </p>
              <p>
                It’s not just automation. It’s the foundation of the modern financial operating system, 
                making CA firms indispensable partners to MSMEs.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Mission Grid */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-brand">For CA Firms</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Internal accounting automation & revenue tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Multi-client & multi-team management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Advisory & value-added services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Compliance & risk management
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900/50 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-brand">For MSMEs</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Full ledger automation & real-time reports
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Compliance coordination (GST, TDS, ITC)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Advanced business insights & advisory dashboards
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-1">✓</span>
                  Seamless CA-Client collaboration
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12">
              Meet the <span className="text-brand">Founders</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {founders.map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Mentors Section */}
        <section>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-12">
              Our <span className="text-brand">Mentors</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {mentors.map((member, idx) => (
                <TeamMember key={idx} {...member} />
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
};

export default About;
