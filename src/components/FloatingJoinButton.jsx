import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function FloatingJoinButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group"
        >
          <a
            href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 sm:pr-6 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all transform hover:scale-105 border border-white/20 hover:border-white/50"
          >
            <div className="relative flex items-center justify-center">
              <FaWhatsapp className="text-3xl relative z-10" />
              <div className="absolute inset-0 bg-white/20 rounded-full animate-ping z-0"></div>
            </div>
            <div className="flex-col hidden sm:flex">
              <span className="text-sm font-bold leading-tight">Join EboXAI</span>
              <span className="text-[10px] uppercase tracking-wider opacity-90 leading-tight flex items-center gap-1">On WhatsApp <FaArrowRight className="text-[8px]"/></span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
