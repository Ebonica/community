import { motion } from 'framer-motion';
import { FaFilePdf, FaLockOpen, FaWhatsapp } from 'react-icons/fa';

export default function FreeResource() {
  return (
    <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-black/20 via-neonPurple/5 to-black/20" id="resources">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] p-[2px] bg-gradient-to-r from-neonBlue via-purple-500 to-neonPurple overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)]"
        >
          {/* Inner Content */}
          <div className="bg-black/95 rounded-[2.4rem] p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-3xl">
            
            {/* Background Glows */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-neonBlue/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-neonPurple/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex-1 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/10 text-neonBlue text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <FaLockOpen /> Free Inside Community
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">Prompt Engineering</span> Guide
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Join the EboXAI community today and get instant access to our curated premium cheat sheet featuring 50+ god-tier AI prompts, developer tools, and workflow automations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <a 
                  href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] border border-white"
                >
                  <FaWhatsapp className="text-2xl text-[#25D366]" />
                  Join to Download PDF
                </a>
              </div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/3 flex justify-center">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative"
              >
                {/* Book / PDF Visual representation */}
                <div className="w-48 h-64 md:w-64 md:h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl border border-white/20 shadow-[0_20px_50px_rgba(0,240,255,0.3)] flex flex-col p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-neonPurple/30 blur-3xl rounded-full group-hover:bg-neonBlue/40 transition-colors duration-700"></div>
                  
                  <div className="flex justify-between items-start mb-auto relative z-10">
                    <img src="/logo.png" alt="Logo" className="h-6 opacity-80" />
                    <FaFilePdf className="text-red-500/80 text-3xl" />
                  </div>
                  
                  <div className="mt-auto relative z-10">
                    <div className="w-12 h-1 bg-neonBlue/80 rounded-full mb-4 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight drop-shadow-md">Mastering AI Tools</h3>
                    <p className="text-xs text-neonBlue/80 font-mono tracking-wider uppercase">Vol. 1 - Exclusives</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
