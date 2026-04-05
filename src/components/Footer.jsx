import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10 relative z-10 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-sm font-medium">
          Built with <span className="text-red-500 animate-pulse inline-block">❤️</span> by <span className="text-white font-bold tracking-wider">EboXAI</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/groups/18652003/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/20 transition-all">
            <FaLinkedinIn />
          </a>
          <a href="https://chat.whatsapp.com/Dp77hDeN82cE2gpPPGDDK9?mode=gi_t" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-neonBlue hover:bg-neonBlue/20 transition-all border-hover:border-neonBlue/50">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
