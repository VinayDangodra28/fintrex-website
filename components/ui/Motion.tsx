
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// --- Core Primitives ---

export const FadeIn: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// iOS 26 / VisionOS Aesthetic: Glass Surface
export const GlassSurface: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${className}`}>
    {children}
  </div>
);

// iOS 26 / VisionOS Aesthetic: 3D Tilt Card (Holographic Feel)
export const HoloCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="relative z-10 h-full">
        <GlassSurface className="h-full rounded-3xl overflow-hidden relative transition-colors duration-500 group-hover:bg-white/10">
           {children}
        </GlassSurface>
      </div>
    </motion.div>
  );
};

// iOS 26 / VisionOS Aesthetic: Elastic Button
export const ElasticButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}> = ({ children, onClick, variant = 'primary', className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={`
        relative px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 backdrop-blur-md
        ${variant === 'primary' 
          ? 'bg-brand/90 text-black border border-brand/50 shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_50px_rgba(0,255,136,0.5)] hover:bg-brand' 
          : 'bg-white/5 border border-white/20 text-white hover:bg-white/10'}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
};

// Premium Mouse-Tracking Spotlight Card
export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden group ${className}`}
    >
      {/* Spotlight Gradient Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 255, 136, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

export const WaitlistInput: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail("");
    }, 1500);
  };

  return (
    <div className={`relative max-w-md w-full mx-auto ${className}`}>
      <AnimatePresence mode='wait'>
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-brand/10 backdrop-blur-xl border border-brand/50 text-brand rounded-full px-6 py-4 flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,255,136,0.2)]"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">You've secured your spot! Welcome to the future.</span>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="relative group"
          >
            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand via-blue-500 to-brand rounded-full opacity-20 group-hover:opacity-40 blur-xl transition duration-700" />
            
            {/* Glass Capsule */}
            <div className="relative flex items-center bg-neutral-900/90 backdrop-blur-xl rounded-full p-2 border border-white/20 focus-within:border-brand/50 focus-within:ring-1 focus-within:ring-brand/50 transition-all duration-300 shadow-2xl">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-grow bg-transparent text-white placeholder-gray-400 px-6 py-2 outline-none text-base md:text-lg w-full font-light"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === 'loading'}
                className="bg-brand text-black rounded-full px-8 py-3 font-bold hover:bg-brand-light hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 group"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Join Waitlist 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:opacity-100 group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      {status !== 'success' && (
        <p className="text-gray-500 text-xs mt-4 text-center font-medium tracking-wide">
          Limited spots available. <span className="text-brand">No spam, ever.</span>
        </p>
      )}
    </div>
  );
};
