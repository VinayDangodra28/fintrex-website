import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentFin } from './ui/BrandAssets';
import { X, Send, MessageSquare } from 'lucide-react';

const FinChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-brand/10 p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30 overflow-hidden">
                   <AgentFin className="w-12 h-12 mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Fin AI</h4>
                  <p className="text-xs text-brand flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 p-4 overflow-y-auto space-y-4 bg-black/40">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand/20 flex-shrink-0 flex items-center justify-center border border-brand/30 overflow-hidden">
                    <AgentFin className="w-10 h-10 mt-1" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-200">
                  Hi there! 👋 I'm Fin, your AI assistant for automated invoicing and practice scaling. I'm currently in development and will be available soon to help streamline your workflow. Stay tuned! 🚀
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-neutral-900">
              <div className="flex items-center gap-2 bg-black/50 rounded-full px-4 py-2 border border-white/10 opacity-60">
                <input 
                  type="text" 
                  placeholder="Coming soon..."
                  disabled
                  className="bg-transparent text-sm flex-grow outline-none text-white placeholder-gray-500 cursor-not-allowed"
                />
                <button disabled className="text-gray-500 cursor-not-allowed">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-brand shadow-[0_0_20px_rgba(0,255,136,0.4)] flex items-center justify-center text-black relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div 
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} className="font-bold" />
            </motion.div>
          ) : (
            <motion.div 
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              {/* Using Fin Head or Icon */}
              <div className="w-10 h-10 overflow-hidden rounded-full flex items-center justify-center">
                  <AgentFin className="w-16 h-16 mt-3" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FinChatbot;