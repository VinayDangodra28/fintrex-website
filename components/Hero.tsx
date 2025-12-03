import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Sparkles
} from 'lucide-react';
import { WaitlistInput } from '../components/ui/Motion';
import ParticleSphere from './ParticleSphere';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Automate", "Simplify", "Optimize", "Secure"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-[#050505]">
         {/* Hexagon Background */}
         <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%2300ff88' fill-opacity='0.2' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
         }} />
         
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-0" />

         <div className="container max-w-7xl mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="text-left mx-auto lg:mx-0 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center self-start mb-6 px-3 py-1.5 rounded-full border border-brand/30 bg-brand/5 text-brand text-xs font-medium tracking-wide uppercase"
                  >
                    <Sparkles className="w-3 h-3 mr-2" />
                    Waitlist Closing Soon
                  </motion.div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white leading-tight tracking-tight">
                    Empower your Firm to <br className="hidden md:block" />
                    <span className="inline-flex flex-wrap gap-x-3">
                      <span className="text-brand glow-text relative inline-block min-w-[180px] md:min-w-[240px]">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={wordIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-0"
                          >
                            {words[wordIndex]}
                          </motion.span>
                        </AnimatePresence>
                        <span className="invisible">Automate</span>
                      </span>
                      <span>Your Invoices</span>
                    </span>
                  </h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-base md:text-lg mb-0 max-w-lg leading-relaxed"
                  >
                    FinTrex empowers CA firms to handle invoices smarter and faster. Free your team to focus on advisory work while routine tasks run on autopilot.
                  </motion.p>
              </div>

              {/* Right Content - 3D Sphere */}
              <motion.div 
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="h-[300px] md:h-[450px] lg:h-[550px] w-full relative flex items-center justify-center"
              >
                 <ParticleSphere />
              </motion.div>
            </div>

            {/* Waitlist Section - Moved Below */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="w-full max-w-md mx-auto lg:mx-0 mt-12 lg:mt-24"
            >
                <WaitlistInput />
            </motion.div> */}
         </div>
         
         {/* Social Icons (Bottom Right) */}
         <div className="absolute bottom-50 right-10 flex flex-col gap-6 z-20 text-gray-500">
            <a href="#" className="hover:text-brand transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-brand transition-colors"><Youtube size={20} /></a>
         </div>
    </div>
  );
};

export default Hero;