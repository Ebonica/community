import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-4 border-t border-white/10 relative z-10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mb-12">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src="/logo.png" alt="EboXAI" className="h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            The premium community connecting innovators, learning AI together and pushing the boundaries of practical AI engineering.
          </p>
          <a href="mailto:eboxai7@gmail.com" className="inline-flex items-center gap-2 text-gray-300 hover:text-neonBlue transition-colors text-sm font-semibold tracking-wide bg-white/5 py-2 px-4 mt-2 rounded-full border border-white/10 hover:border-neonBlue/30 shadow-sm">
            <FaEnvelope className="text-neonBlue" /> eboxai7@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/eboxai" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#E4405F] hover:bg-[#E4405F]/20 transition-all text-xl shadow-lg">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/groups/18652003/" target="_blank" rel="noopener noreferrer" title="LinkedIn Community" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all text-xl shadow-lg">
            <FaLinkedinIn />
          </a>
          <a href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t" target="_blank" rel="noopener noreferrer" title="WhatsApp Community" className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-[#25D366] hover:bg-[#25D366]/20 transition-all text-xl shadow-lg">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row flex-wrap items-center justify-between gap-6">
        <div className="text-gray-500 text-sm text-center md:text-left font-medium">
          &copy; {new Date().getFullYear()} EboXAI. All rights reserved.
        </div>
        <div className="text-gray-400 text-sm font-medium text-center md:text-right flex flex-col sm:flex-row items-center gap-2">
          <div>Built with <span className="text-red-500 animate-pulse mx-1">❤️</span> by <span className="text-white font-bold tracking-wider">EboXAI</span></div>
          <span className="hidden sm:inline mx-2 text-white/20">|</span>
          <div className="mt-2 sm:mt-0">Founder: <a href="https://www.linkedin.com/in/ebonica-saleth-92b268224/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neonBlue transition-colors font-bold tracking-wider ml-1 border-b border-neonBlue/30 hover:border-neonBlue pb-0.5">Ebonica Saleth</a></div>
        </div>
      </div>
    </footer>
  );
}
