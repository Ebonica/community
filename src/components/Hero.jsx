import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 glass-card text-sm font-medium tracking-wide text-neonBlue"
        >
          Making AI simple, practical, and accessible
        </motion.div>
        
        <h1 className="flex justify-center items-center mb-6 w-full">
          <img src="/logo.png" alt="EboXAI" className="h-40 md:h-56 lg:h-72 lg:max-w-4xl object-contain drop-shadow-[0_0_35px_rgba(0,240,255,0.5)]" />
        </h1>
        
        <h2 className="text-xl md:text-3xl font-light text-gray-300 mb-4">
          Artificial Intelligence & Technology Hub
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Learn. Build. Grow in AI 🤖
        </p>

        {/* Tree Growth Interactive Section */}
        <div 
          className="flex flex-col items-center justify-center mb-16 relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={`flex items-center gap-3 px-6 py-3 glass-card rounded-full border relative z-20 cursor-pointer transition-all duration-300 ${isHovered ? 'border-neonBlue/50 shadow-[0_0_30px_rgba(0,240,255,0.2)] bg-white/10' : 'border-white/10'}`}
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <div className="text-sm md:text-base font-medium text-gray-200">
              <span className="tabular-nums font-bold text-white">200+</span> Online & Growing rapidly
            </div>
            
            {!isHovered && (
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap animate-pulse font-semibold uppercase tracking-widest">
                Hover to see the growth
              </span>
            )}
          </motion.div>

          {/* The SVG Digital Tree */}
          <div className="absolute top-[50px] w-full max-w-3xl h-32 md:h-40 flex justify-center pointer-events-none z-0">
            <svg width="100%" height="100%" viewBox="0 0 800 160" preserveAspectRatio="none" className="overflow-visible filter drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">
              {/* Main Trunk */}
              <motion.path 
                d="M400 0 L400 50" 
                stroke="url(#gradientX)" strokeWidth="4" fill="none" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
              />
              
              {/* Secondary Mid Branches */}
              <motion.path 
                d="M400 30 Q350 40 320 80" 
                stroke="#00f0ff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} 
                transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0, ease: "easeOut" }} 
              />
              <motion.path 
                d="M400 30 Q450 40 480 80" 
                stroke="#b026ff" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} 
                transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0, ease: "easeOut" }} 
              />

              {/* Main Left Root */}
              <motion.path 
                d="M400 50 Q200 80 150 160" 
                stroke="#00f0ff" strokeWidth="3" fill="none" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} 
                transition={{ duration: 0.6, delay: isHovered ? 0.4 : 0, ease: "easeOut" }} 
              />
              
              {/* Main Right Root */}
              <motion.path 
                d="M400 50 Q600 80 650 160" 
                stroke="#b026ff" strokeWidth="3" fill="none" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: isHovered ? 1 : 0 }} 
                transition={{ duration: 0.6, delay: isHovered ? 0.4 : 0, ease: "easeOut" }} 
              />

              <defs>
                <linearGradient id="gradientX" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#b026ff" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* End Nodes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }} 
              transition={{ duration: 0.2, delay: isHovered ? 0.9 : 0 }}
              className="absolute bottom-[-5px] left-[calc(50%-250px)] w-3 h-3 rounded-full bg-neonBlue shadow-[0_0_15px_#00f0ff]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }} 
              transition={{ duration: 0.2, delay: isHovered ? 0.9 : 0 }}
              className="absolute bottom-[-5px] right-[calc(50%-250px)] w-3 h-3 rounded-full bg-neonPurple shadow-[0_0_15px_#b026ff]"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -20, height: isHovered ? 'auto' : 0 }}
            transition={{ duration: 0.5, delay: isHovered ? 1 : 0 }}
            className={`w-full overflow-hidden flex flex-col items-center ${isHovered ? 'mt-40 md:mt-48 pointer-events-auto' : 'mt-0 pointer-events-none'}`}
          >
            <p className="text-sm font-semibold text-white mb-8 uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
              Wanna join the growth? 👇
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button group relative px-8 py-4 bg-white text-dark rounded-full font-semibold text-lg flex items-center justify-center gap-3 w-full sm:w-1/2"
              >
                <FaWhatsapp className="text-2xl" />
                <span>Join WhatsApp</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/groups/18652003/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-card border border-white/20 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-colors w-full sm:w-1/2 shadow-[0_0_15px_#b026ff20]"
              >
                <FaLinkedinIn className="text-2xl" />
                <span>Join LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
