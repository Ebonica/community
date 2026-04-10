import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="EboXAI" className="h-10 md:h-12 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]" />
          </div>
          
          <div className="hidden md:block border border-white/10 rounded-full px-6 py-2 bg-white/5 shadow-inner">
            <div className="flex items-center gap-8">
              <span className="text-gray-300 hover:text-neonBlue cursor-pointer text-sm font-semibold transition-colors uppercase tracking-widest">Home</span>
              <span className="text-gray-300 hover:text-neonBlue cursor-pointer text-sm font-semibold transition-colors uppercase tracking-widest" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth'})}>About</span>
              <span className="text-gray-300 hover:text-neonBlue cursor-pointer text-sm font-semibold transition-colors uppercase tracking-widest" onClick={() => window.scrollTo({ top: 3000, behavior: 'smooth'})}>Testimonials</span>
            </div>
          </div>

          <div className="flex items-center">
             <a 
                href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/20 hover:border-white text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] glow-button"
              >
                Join Now <span className="ml-1">🚀</span>
              </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
